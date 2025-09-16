// Email service for password reset functionality
// This is a template that can be configured with your preferred email provider

interface EmailConfig {
  from: string;
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send password reset email
 * @param email - Recipient email address
 * @param resetToken - Password reset token
 * @param userName - User's name (optional)
 */
/**
 * Send email verification email
 * @param email - Recipient email address
 * @param verificationToken - Email verification token
 * @param userName - User's name (optional)
 */
export async function sendEmailVerification(
  email: string,
  verificationToken: string,
  userName?: string,
) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`;

  const emailConfig: EmailConfig = {
    from:
      process.env.NODE_ENV === "development"
        ? "onboarding@resend.dev"
        : process.env.EMAIL_FROM || "noreply@newmarket.com",
    to: email,
    subject: "Verify Your Email - New Market",
    html: generateVerificationEmailHTML(verificationUrl, userName),
    text: generateVerificationEmailText(verificationUrl, userName),
  };

  try {
    // Using Gmail SMTP as the email provider
    await sendWithGmail(emailConfig);

    // For development, log the email content
    if (process.env.NODE_ENV === "development") {
      console.log("=== EMAIL VERIFICATION ====");
      console.log(`To: ${emailConfig.to}`);
      console.log(`Subject: ${emailConfig.subject}`);
      console.log(`Verification URL: ${verificationUrl}`);
      console.log("===========================");
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send email verification:", error);
    throw new Error("Failed to send email verification");
  }
}

export async function sendPasswordResetEmail(
  email: string,
  resetToken: string,
  userName?: string,
) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;

  const emailConfig: EmailConfig = {
    from:
      process.env.NODE_ENV === "development"
        ? "onboarding@resend.dev"
        : process.env.EMAIL_FROM || "noreply@newmarket.com",
    to: email,
    subject: "Reset Your Password - New Market",
    html: generateResetEmailHTML(resetUrl, userName),
    text: generateResetEmailText(resetUrl, userName),
  };

  try {
    // Using Gmail SMTP as the email provider
    await sendWithGmail(emailConfig);

    // For development, log the email content
    if (process.env.NODE_ENV === "development") {
      console.log("=== PASSWORD RESET EMAIL ===");
      console.log(`To: ${emailConfig.to}`);
      console.log(`Subject: ${emailConfig.subject}`);
      console.log(`Reset URL: ${resetUrl}`);
      console.log("============================");
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error("Failed to send password reset email");
  }
}

/**
 * Generate HTML email template for password reset
 */
function generateResetEmailHTML(resetUrl: string, userName?: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Password</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .button { 
          display: inline-block; 
          padding: 12px 24px; 
          background-color: #007bff; 
          color: white; 
          text-decoration: none; 
          border-radius: 5px; 
          margin: 20px 0;
        }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Market</h1>
        </div>
        <div class="content">
          <h2>Reset Your Password</h2>
          <p>Hello${userName ? ` ${userName}` : ""},</p>
          <p>We received a request to reset your password for your New Market account. If you didn't make this request, you can safely ignore this email.</p>
          <p>To reset your password, click the button below:</p>
          <p style="text-align: center;">
            <a href="${resetUrl}" class="button">Reset Password</a>
          </p>
          <p>Or copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #007bff;">${resetUrl}</p>
          <p><strong>This link will expire in 15 minutes for security reasons.</strong></p>
          <p>If you're having trouble clicking the button, copy and paste the URL above into your web browser.</p>
        </div>
        <div class="footer">
          <p>This email was sent from New Market. If you have any questions, please contact our support team.</p>
          <p>&copy; ${new Date().getFullYear()} New Market. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email for password reset
 */
function generateResetEmailText(resetUrl: string, userName?: string): string {
  return `
Reset Your Password - New Market

Hello${userName ? ` ${userName}` : ""},

We received a request to reset your password for your New Market account. If you didn't make this request, you can safely ignore this email.

To reset your password, visit this link:
${resetUrl}

This link will expire in 15 minutes for security reasons.

If you're having trouble with the link, copy and paste it into your web browser.

Best regards,
The New Market Team

© ${new Date().getFullYear()} New Market. All rights reserved.
  `;
}

/**
 * Generate HTML email template for email verification
 */
function generateVerificationEmailHTML(
  verificationUrl: string,
  userName?: string,
): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .button { 
          display: inline-block; 
          padding: 12px 24px; 
          background-color: #28a745; 
          color: white; 
          text-decoration: none; 
          border-radius: 5px; 
          margin: 20px 0;
        }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Market</h1>
        </div>
        <div class="content">
          <h2>Verify Your Email Address</h2>
          <p>Hello${userName ? ` ${userName}` : ""},</p>
          <p>Welcome to New Market! To complete your registration and start shopping, please verify your email address.</p>
          <p>Click the button below to verify your email:</p>
          <p style="text-align: center;">
            <a href="${verificationUrl}" class="button">Verify Email</a>
          </p>
          <p>Or copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #28a745;">${verificationUrl}</p>
          <p><strong>This link will expire in 24 hours for security reasons.</strong></p>
          <p>If you didn't create an account with New Market, you can safely ignore this email.</p>
        </div>
        <div class="footer">
          <p>Best regards,<br>The New Market Team</p>
          <p>© ${new Date().getFullYear()} New Market. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate plain text email for email verification
 */
function generateVerificationEmailText(
  verificationUrl: string,
  userName?: string,
): string {
  return `
New Market - Verify Your Email Address

Hello${userName ? ` ${userName}` : ""},

Welcome to New Market! To complete your registration and start shopping, please verify your email address.

Click or copy the following link to verify your email:
${verificationUrl}

This link will expire in 24 hours for security reasons.

If you didn't create an account with New Market, you can safely ignore this email.

Best regards,
The New Market Team

© ${new Date().getFullYear()} New Market. All rights reserved.
  `;
}

// Example implementations for different email providers:

/**
 * Send email using Nodemailer (uncomment and configure as needed)
 */
/*
import nodemailer from 'nodemailer';

async function sendWithNodemailer(config: EmailConfig) {
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail(config);
}
*/

/**
 * Send email using SendGrid (uncomment and configure as needed)
 */
/*
import sgMail from '@sendgrid/mail';

async function sendWithSendGrid(config: EmailConfig) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  await sgMail.send(config);
}
*/

/**
 * Send email using Resend
 */
import nodemailer from "nodemailer";

async function sendWithGmail(config: EmailConfig) {
  const emailUser = process.env.GMAIL_USER;
  const emailPass = process.env.GMAIL_APP_PASSWORD;

  if (!emailUser || !emailPass) {
    if (process.env.NODE_ENV === "development") {
      console.log(
        "⚠️  Gmail credentials not configured. Email would be sent in production.",
      );
      return; // Skip sending in development when credentials are not set
    }
    throw new Error(
      "Gmail credentials are required. Please set GMAIL_USER and GMAIL_APP_PASSWORD in your environment variables.",
    );
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  try {
    const result = await transporter.sendMail({
      from: config.from,
      to: config.to,
      subject: config.subject,
      html: config.html,
      text: config.text,
    });

    if (process.env.NODE_ENV === "development") {
      console.log("📧 Email sent successfully via Gmail SMTP!");
      console.log("Message ID:", result.messageId);
    }

    return result;
  } catch (error) {
    console.error("❌ Gmail SMTP email sending failed:", error);
    throw error;
  }
}
