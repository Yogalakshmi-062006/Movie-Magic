from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_mail import Mail, Message
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
from dotenv import load_dotenv
import boto3
import uuid
import json
import os
from botocore.exceptions import ClientError

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
# Use a static secret key
app.secret_key = 'your_static_secret_key_here'  # Replace with your own secret string

# Flask-Mail Configuration
app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.environ.get('MAIL_USE_TLS', True)
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME', 'your_email@gmail.com')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD', 'your_app_password')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER', 'noreply@moviemagic.com')

mail = Mail(app)

# In-memory database (mock) - for testing without AWS
users_db = {}  # Store users in memory for testing
bookings_db = {}  # Store bookings in memory for testing
USE_MOCK_DB = True  # Set to False if you have AWS credentials configured
SEND_REAL_EMAILS = True  # Enable email sending via SMTP

# AWS Configuration - read from environment variables for security
AWS_REGION = os.environ.get('AWS_REGION', 'us-east-1')
SNS_TOPIC_ARN = 'arn:aws:sns:us-east-1:557690577200:MovieTicketNotifications'

# Initialize AWS services only if credentials are available
try:
    if not USE_MOCK_DB:
        dynamodb = boto3.resource('dynamodb', region_name=AWS_REGION)
        sns = boto3.client('sns', region_name=AWS_REGION)
        USERS_TABLE_NAME = os.environ.get('USERS_TABLE_NAME', 'MovieMagic_Users')
        BOOKINGS_TABLE_NAME = os.environ.get('BOOKINGS_TABLE_NAME', 'MovieMagic_Bookings')
        users_table = dynamodb.Table(USERS_TABLE_NAME)
        bookings_table = dynamodb.Table(BOOKINGS_TABLE_NAME)
        print("✓ Using AWS DynamoDB")
    else:
        print("✓ Using Mock In-Memory Database (Test Mode)")
except Exception as e:
    print(f"⚠ AWS not configured, using mock database: {str(e)}")
    USE_MOCK_DB = True

# Authentication Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        try:
            if USE_MOCK_DB:
                # Use mock in-memory database
                if email in users_db:
                    user = users_db[email]
                    if check_password_hash(user['password'], password):
                        session['user'] = {
                            'id': user['id'],
                            'name': user['name'],
                            'email': user['email']
                        }
                        flash('Login successful!', 'success')
                        return redirect(url_for('home1'))
                flash('Invalid email or password', 'danger')
            else:
                # Use AWS DynamoDB
                response = users_table.get_item(Key={'email': email})
                
                if 'Item' in response:
                    user = response['Item']
                    if check_password_hash(user['password'], password):
                        session['user'] = {
                            'id': user['id'],
                            'name': user['name'],
                            'email': user['email']
                        }
                        flash('Login successful!', 'success')
                        return redirect(url_for('home1'))
                
                flash('Invalid email or password', 'danger')
        except ClientError as e:
            print(f"Error accessing DynamoDB: {e.response['Error']['Message']}")
            flash('Database error. Please try again later.', 'danger')
        except Exception as e:
            print(f"Login error: {str(e)}")
            flash('An error occurred. Please try again.', 'danger')
            
    return render_template('login.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = generate_password_hash(request.form['password'])
        
        try:
            if USE_MOCK_DB:
                # Use mock in-memory database
                if email in users_db:
                    flash('Email already registered!', 'danger')
                    return redirect(url_for('signup'))
                
                # Create new user
                user_id = str(uuid.uuid4())
                users_db[email] = {
                    'id': user_id,
                    'name': name,
                    'email': email,
                    'password': password,
                    'created_at': datetime.now().isoformat()
                }
                flash('Registration successful! Please login.', 'success')
                print(f"✓ User registered: {email}")
                return redirect(url_for('login'))
            else:
                # Use AWS DynamoDB
                response = users_table.get_item(Key={'email': email})
                if 'Item' in response:
                    flash('Email already registered!', 'danger')
                    return redirect(url_for('signup'))
                
                # Create new user in DynamoDB
                user_id = str(uuid.uuid4())
                users_table.put_item(
                    Item={
                        'id': user_id,
                        'name': name,
                        'email': email,
                        'password': password,
                        'created_at': datetime.now().isoformat()
                    }
                )
                
                flash('Registration successful! Please login.', 'success')
                return redirect(url_for('login'))
            
        except ClientError as e:
            print(f"Error accessing DynamoDB: {e.response['Error']['Message']}")
            flash('Database error. Please try again.', 'danger')
        except Exception as e:
            print(f"Signup error: {str(e)}")
            flash('An error occurred during registration. Please try again.', 'danger')
            
    return render_template('signup.html')

@app.route('/logout')
def logout():
    session.pop('user', None)
    flash('You have been logged out!', 'info')
    return redirect(url_for('index'))

# Application Routes
@app.route('/home1')
def home1():
    if 'user' not in session:
        return redirect(url_for('login'))
    return render_template('home1.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact_us')
def contact():
    return render_template('contact_us.html')

# Booking page route
@app.route('/b1', methods=['GET'], endpoint='b1')  # Add explicit endpoint
def booking_page():
    if 'user' not in session:
        return redirect(url_for('login'))

    return render_template('b1.html',
        movie=request.args.get('movie'),
        theater=request.args.get('theater'),
        address=request.args.get('address'),
        price=request.args.get('price')
    )

@app.route('/tickets', methods=['POST'])
def tickets():
    if 'user' not in session:
        return redirect(url_for('login'))
        
    try:
        # Extract booking details from form
        movie_name = request.form.get('movie')
        booking_date = request.form.get('date')  
        show_time = request.form.get('time')
        theater_name = request.form.get('theater')
        theater_address = request.form.get('address')
        selected_seats = request.form.get('seats')
        amount_paid = request.form.get('amount')
        
        # Generate a unique booking ID
        booking_id = f"MVM-{datetime.now().strftime('%Y%m%d')}-{str(uuid.uuid4())[:8]}"
        
        # Create booking item
        booking_item = {
            'booking_id': booking_id,
            'movie_name': movie_name,
            'date': booking_date,
            'time': show_time,
            'theater': theater_name,
            'address': theater_address,
            'booked_by': session['user']['email'],
            'user_name': session['user']['name'],
            'seats': selected_seats,
            'amount_paid': amount_paid,
            'booking_time': datetime.now().isoformat()
        }
        
        if USE_MOCK_DB:
            # Store in mock database
            bookings_db[booking_id] = booking_item
            print(f"✓ Booking saved: {booking_id}")
        else:
            # Store in DynamoDB
            bookings_table.put_item(Item=booking_item)
        
        # Send email notification via SNS (if available)
        notification_sent = send_booking_confirmation(booking_item)
        if notification_sent:
            flash('Booking confirmation has been sent to your email!', 'success')
        else:
            flash('Booking confirmed! (Email notification unavailable)', 'success')
        
        # Pass the booking details to the tickets template
        return render_template('tickets.html', booking=booking_item)
        
    except Exception as e:
        print(f"Error processing booking: {str(e)}")
        flash('Error processing booking', 'danger')
        return redirect(url_for('home1'))

def send_booking_confirmation(booking):
    """Send booking confirmation email using Flask-Mail"""
    try:
        user_email = booking['booked_by']
        user_name = booking['user_name']
        
        # Format email content with HTML
        email_html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; background-color: #f5f5f5;">
                <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 20px; border-radius: 10px;">
                    <h1 style="color: #e50914;">MovieMagic - Booking Confirmation</h1>
                    
                    <p>Hello <strong>{user_name}</strong>,</p>
                    
                    <p>Your movie ticket booking is confirmed! Here are your booking details:</p>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Booking ID:</strong> {booking['booking_id']}</p>
                        <p><strong>Movie:</strong> {booking['movie_name']}</p>
                        <p><strong>Date:</strong> {booking['date']}</p>
                        <p><strong>Time:</strong> {booking['time']}</p>
                        <p><strong>Theater:</strong> {booking['theater']}</p>
                        <p><strong>Location:</strong> {booking['address']}</p>
                        <p><strong>Seats:</strong> {booking['seats']}</p>
                        <p><strong>Amount Paid:</strong> ₹{booking['amount_paid']}</p>
                        <p><strong>Booking Time:</strong> {booking['booking_time']}</p>
                    </div>
                    
                    <p style="background-color: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin: 20px 0;">
                        <strong>Important:</strong> Please show this confirmation at the theater to collect your tickets.
                    </p>
                    
                    <p>Thank you for choosing MovieMagic! Enjoy your movie! 🎬</p>
                    
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 12px;">
                        This is an automated email. Please do not reply to this email.
                    </p>
                </div>
            </body>
        </html>
        """
        
        # Create and send email
        msg = Message(
            subject=f'MovieMagic Booking Confirmation - {booking["booking_id"]}',
            recipients=[user_email],
            html=email_html
        )
        
        mail.send(msg)
        print(f"✓ Booking confirmation email sent to {user_email}")
        return True
        
    except Exception as e:
        print(f"⚠ Error sending email: {str(e)}")
        # Log error but don't fail the booking
        return False

# Error handlers - uncommented for better error handling
# @app.errorhandler(404)
# def page_not_found(e):
#     return render_template('404.html'), 404

# @app.errorhandler(500)
# def server_error(e):
#     return render_template('500.html'), 500

if __name__ == '__main__':
    # Using Flask's built-in server as requested
    port = int(os.environ.get('PORT', 5000))
    # You can set debug=False in production
    app.run(host='0.0.0.0', port=port, debug=True)
