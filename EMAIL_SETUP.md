# Email Service Setup Guide

This guide will help you configure email services for your authentication system (email verification and password reset).

## 🚀 Recommended: Resend (Already Configured!)

**Resend is now pre-configured and ready to use!** It's the best choice for modern applications.

**Quick Setup:**
1. See the detailed [Resend Setup Guide](./RESEND_SETUP.md)
2. Get your free API key from [resend.com](https://resend.com)
3. Update your `.env.local` file with the API key
4. Start sending emails!

**Why Resend?**
- ✅ **Already integrated** - No additional setup needed
- ✅ **3,000 free emails/month** - Perfect for development and small apps
- ✅ **Modern developer experience** - Built for React/Next.js
- ✅ **Great deliverability** - Professional email delivery
- ✅ **React Email support** - Beautiful email templates

---

## Alternative Email Provider Options

If you prefer a different provider, here are other options:

### Option 1: Gmail/SMTP (Recommended for Development)

**Pros:** Free, easy setup, works with any SMTP provider
**Cons:** Lower sending limits

#### Setup Steps:

1. **Enable 2FA on your Gmail account**
2. **Generate App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"

3. **Update .env.local:**
   ```env
   EMAIL_FROM="your-email@gmail.com"
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_SECURE="false"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-16-character-app-password"
   ```

4. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install -D @types/nodemailer
   ```

5. **Update email-service.ts:**
   - Uncomment the Nodemailer implementation (lines 267-279)
   - Uncomment the sendWithNodemailer call (line 40)

---

### Option 2: SendGrid (Recommended for Production)

**Pros:** High deliverability, generous free tier (100 emails/day)
**Cons:** Requires account setup

#### Setup Steps:

1. **Create SendGrid Account:** https://sendgrid.com
2. **Generate API Key:**
   - Settings → API Keys → Create API Key
   - Choose "Restricted Access" with Mail Send permissions

3. **Update .env.local:**
   ```env
   EMAIL_FROM="noreply@yourdomain.com"
   SENDGRID_API_KEY="your-sendgrid-api-key"
   ```

4. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

5. **Update email-service.ts:**
   - Uncomment the SendGrid implementation (lines 286-292)
   - Uncomment the sendWithSendGrid call (line 41)

---

### Option 3: Resend (Modern Alternative)

**Pros:** Developer-friendly, good free tier (3,000 emails/month)
**Cons:** Newer service

#### Setup Steps:

1. **Create Resend Account:** https://resend.com
2. **Generate API Key:** Dashboard → API Keys → Create

3. **Update .env.local:**
   ```env
   EMAIL_FROM="noreply@yourdomain.com"
   RESEND_API_KEY="your-resend-api-key"
   ```

4. **Install Resend:**
   ```bash
   npm install resend
   ```

5. **Update email-service.ts:**
   - Uncomment the Resend implementation (lines 298-304)
   - Uncomment the sendWithResend call (line 42)

---

## Testing Your Setup

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Test email verification:**
   - Register a new user at `/auth/sign-up`
   - Check console logs for email content (development mode)
   - Check your email inbox for verification email

3. **Test password reset:**
   - Go to `/auth/forgot-password`
   - Enter your email address
   - Check console logs and email inbox

---

## Troubleshooting

### Gmail SMTP Issues:
- Ensure 2FA is enabled
- Use App Password, not regular password
- Check "Less secure app access" is disabled (use App Password instead)

### SendGrid Issues:
- Verify your sender identity in SendGrid dashboard
- Check API key permissions include Mail Send
- Ensure FROM email matches verified sender

### General Issues:
- Check environment variables are loaded correctly
- Verify email service function is uncommented
- Check console logs for detailed error messages
- Ensure NEXTAUTH_URL matches your development URL

---

## Production Considerations

1. **Domain Verification:** Set up SPF, DKIM, and DMARC records
2. **Rate Limiting:** Implement email sending rate limits
3. **Monitoring:** Set up email delivery monitoring
4. **Fallback:** Consider multiple email providers for redundancy
5. **Templates:** Use professional email templates
6. **Unsubscribe:** Add unsubscribe links for marketing emails

---

## Next Steps After Email Setup

1. Create frontend components for email verification
2. Create frontend components for password reset flow
3. Add proper error handling and user feedback
4. Implement rate limiting for authentication endpoints
5. Add comprehensive testing
6. Create user dashboard/profile pages