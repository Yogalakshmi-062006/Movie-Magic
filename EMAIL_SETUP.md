# Email Configuration Guide for MovieMagic

## Quick Setup (Gmail - Recommended)

### Step 1: Enable 2-Factor Authentication (2FA)
1. Go to https://myaccount.google.com/security
2. Scroll down and enable **2-Step Verification**
3. Complete the verification process

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
3. Google will generate a 16-character password
4. Copy this password (ignore spaces)

### Step 3: Configure .env File
1. Open the `.env` file in the project root
2. Set these values:
```
MAIL_SERVER=smtp.gmail.com
MAIL_PORT=587
MAIL_USE_TLS=true
MAIL_USERNAME=your_email@gmail.com
MAIL_PASSWORD=paste_16_char_app_password_here
MAIL_DEFAULT_SENDER=noreply@moviemagic.com
```

### Step 4: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 5: Run the App
```bash
cd Moviemagic
python app.py
```

## Testing Email
1. Create an account and make a booking
2. You should receive an email instantly at the registered email address
3. Check spam/junk folder if not found

## Alternative Email Providers

### Outlook/Hotmail
```
MAIL_SERVER=smtp-mail.outlook.com
MAIL_PORT=587
MAIL_USE_TLS=true
MAIL_USERNAME=your_email@outlook.com
MAIL_PASSWORD=your_password
```

### SendGrid (Recommended for Production)
1. Sign up at https://sendgrid.com
2. Get your API key from Settings
```
MAIL_SERVER=smtp.sendgrid.net
MAIL_PORT=587
MAIL_USE_TLS=true
MAIL_USERNAME=apikey
MAIL_PASSWORD=your_sendgrid_api_key
```

## Common Issues

### Email Not Sending
- Check MAIL_USERNAME and MAIL_PASSWORD are correct
- Ensure 2FA is enabled (for Gmail)
- Check firewall/antivirus isn't blocking port 587
- Review app.py console for error messages

### Google Rejects Credentials
- Make sure you're using the 16-character **App Password**, not your Gmail password
- Go to https://myaccount.google.com/apppasswords to regenerate if needed

### Error: "SMTP authentication failed"
- Verify email and password in .env file
- Check for typos or extra spaces
- Try logging in at https://mail.google.com to confirm credentials work

## Security Best Practices
- Never commit `.env` file to version control (use .gitignore)
- Use App Passwords instead of actual passwords
- In production, use environment variables instead of .env file
- Consider using SendGrid for professional deployments
