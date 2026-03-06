# Movie-Magic-Smart-Movie-Ticket-Booking-System
MovieMagic is a smart, user-friendly web application that allows users to seamlessly browse, select, and book movie tickets online. Designed with a dynamic interface and robust backend, the platform ensures a smooth movie-ticketing experience for both users and administrators.

Tech Stack :
Frontend: HTML, CSS, JavaScript, Bootstrap, Jinja2 (via Flask templating)
Backend: Python (Flask)
Database: AWS DynamoDB (NoSQL)
Notifications: AWS SNS (Simple Notification Service)
Authentication: Secure login/signup with hashed passwords (using werkzeug.security)
Hosting: Tested locally (can be deployed on AWS EC2 or any server)

Features
User Authentication: Signup/Login with session management
Smart Ticket Booking: Select movie, date, showtime, and available seats
Dynamic Scheduling: Filter by movie and date with real-time availability
Price Calculation: Auto price update based on number of selected seats
Email Notifications: Booking confirmation sent via AWS SNS
Admin Panel (optional): Add/remove movies, view bookings (extendable)
