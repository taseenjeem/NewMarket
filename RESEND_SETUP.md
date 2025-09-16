# Resend Email Provider Setup Guide

This guide will help you set up Resend as your email provider for the New Market application.

## Why Resend?

Resend is the recommended email provider for this application because:
- **Free Tier**: 3,000 emails/month with 100 emails/day limit
- **Developer-Friendly**: Built by the creators of React Email
- **Modern Integration**: Seamless Next.js integration
- **Great Deliverability**: High email delivery rates
- **React Email Support**: Create beautiful email templates with React components

## Setup Instructions

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Click "Sign Up" and create your account
3. Verify your email address

### Step 2: Get Your API Key

1. Log into your Resend dashboard
2. Navigate to "API Keys" in the sidebar
3. Click "Create API Key"
4. Give it a name (e.g., "NewMarket Development")
5. Select the appropriate permissions (Full Access for development)
6. Copy the generated API key (starts with `re_`)

### Step 3: Configure Domain (Optional but Recommended)

1. In your Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `yourdomain.com`)
4. Follow the DNS configuration instructions
5. Wait for domain verification

**Note**: For development, you can use the default `onboarding@resend.dev` domain, but for production, you should use your own verified domain.

### Step 4: Update Environment Variables

1. Open your `.env.local` file
2. Replace `your-resend-api-key` with your actual API key:

```env
# Resend Email Provider
RESEND_API_KEY="re_your_actual_api_key_here"
```

3. Update the `EMAIL_FROM` field with your verified domain:

```env
# For development (using Resend's test domain)
EMAIL_FROM="noreply@resend.dev"

# For production (using your verified domain)
# EMAIL_FROM="noreply@yourdomain.com"
```

### Step 5: Test the Configuration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Try the following features:
   - User registration (should send verification email)
   - Password reset (should send reset email)
   - Check the console logs for email details in development mode

## Email Templates

The application uses HTML email templates for:
- **Email Verification**: Sent when users register
- **Password Reset**: Sent when users request password reset

Templates are automatically generated with:
- Professional styling
- Responsive design
- Clear call-to-action buttons
- Branding consistency

## Development vs Production

### Development Mode
- Emails are logged to the console
- Uses Resend's test domain by default
- All email functionality is visible in logs

### Production Mode
- Emails are sent via Resend
- Should use your verified domain
- Set `NODE_ENV="production"` in your environment

## Troubleshooting

### Common Issues

1. **"Invalid API Key" Error**
   - Verify your API key is correct
   - Ensure it starts with `re_`
   - Check for extra spaces or quotes

2. **"Domain not verified" Error**
   - Use `onboarding@resend.dev` for testing
   - Complete domain verification in Resend dashboard

3. **Emails not sending**
   - Check your API key permissions
   - Verify your free tier limits (3,000/month, 100/day)
   - Check Resend dashboard for delivery logs

4. **Rate Limiting**
   - Free tier: 100 emails/day
   - Upgrade to paid plan for higher limits

### Getting Help

- [Resend Documentation](https://resend.com/docs)
- [Resend Support](https://resend.com/support)
- Check the Resend dashboard for delivery logs and analytics

## Next Steps

After setup:
1. Test all email functionality
2. Customize email templates if needed
3. Set up domain verification for production
4. Monitor usage in Resend dashboard
5. Consider upgrading to paid plan for production use

## Free Tier Limits

- **3,000 emails per month**
- **100 emails per day**
- **No credit card required**
- **Full API access**

For most development and small production applications, the free tier is sufficient to get started.