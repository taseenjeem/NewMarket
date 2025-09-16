# Gmail SMTP Setup Guide

This guide will help you configure Gmail SMTP for the email functionality in your Next.js application.

## Prerequisites

1. A Gmail account
2. Two-Factor Authentication (2FA) enabled on your Gmail account

## Step 1: Enable 2FA on Your Gmail Account

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click on "2-Step Verification"
3. Follow the setup process to enable 2FA

## Step 2: Generate App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click on "App passwords"
3. Select "Mail" as the app and "Other" as the device
4. Enter a custom name like "Next.js Portfolio App"
5. Click "Generate"
6. Copy the 16-character app password (it will look like: `abcd efgh ijkl mnop`)

## Step 3: Update Environment Variables

Update your `.env` file with your Gmail credentials:

```env
# Email Configuration - Gmail SMTP
GMAIL_USER="your-actual-gmail@gmail.com"
GMAIL_APP_PASSWORD="your-16-character-app-password"
EMAIL_FROM="your-actual-gmail@gmail.com"
```

**Important Notes:**
- Replace `your-actual-gmail@gmail.com` with your actual Gmail address
- Replace `your-16-character-app-password` with the app password you generated
- Remove any spaces from the app password when copying it

## Step 4: Update Vercel Environment Variables

For production deployment on Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the following variables:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: Your app password
   - `EMAIL_FROM`: Your Gmail address

## Step 5: Test the Implementation

1. Start your development server: `npm run dev`
2. Try to register a new account or request a password reset
3. Check the console logs for email sending confirmation
4. Check your email inbox for the verification/reset email

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**: Make sure 2FA is enabled and you're using an app password, not your regular Gmail password

2. **"Less secure app access" error**: This shouldn't happen with app passwords, but if it does, the app password method bypasses this restriction

3. **Rate limiting**: Gmail has sending limits. For development, this shouldn't be an issue, but be aware for production use

### Development Mode

If Gmail credentials are not configured, the application will:
- Log a warning message in development mode
- Skip sending emails but continue functioning
- Throw an error in production mode

## Security Best Practices

1. Never commit your actual credentials to version control
2. Use different Gmail accounts for development and production if possible
3. Regularly rotate your app passwords
4. Monitor your Gmail account for unusual activity

## Alternative Email Services

If you prefer not to use Gmail SMTP, consider these alternatives:
- SendGrid (free tier available)
- Mailgun
- Amazon SES
- Postmark

Each service has its own setup process and API integration requirements.