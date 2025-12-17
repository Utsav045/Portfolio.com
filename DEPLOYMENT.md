# 🚀 Deployment Guide

This guide explains how to deploy your portfolio website with the email password feature properly configured.

## 📧 Email Configuration

To enable the contact form email notifications, you need to configure your email settings properly.

### Gmail Configuration (Recommended)

1. **Enable 2-Factor Authentication**
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Turn on 2-Step Verification

2. **Generate App Password**
   - Go to your Google Account settings
   - Navigate to Security > App passwords
   - Select "Mail" as the app and your device
   - Google will generate a 16-character password
   - Copy this password (it will not be shown again)

3. **Configure Environment Variables**
   Set these environment variables in your deployment platform:
   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_16_character_app_password
   ```

### Other Email Providers

If you're using another email provider, you'll need to adjust the SMTP settings in `server.js`:

```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-host.com',
  port: 587, // or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
```

## ☁️ Platform-Specific Deployment

### Render Deployment

1. Fork this repository to your GitHub account
2. Sign up/log in to [Render](https://render.com/)
3. Click "New" > "Web Service"
4. Connect your GitHub repository
5. Fill in the settings:
   - **Name**: Your choice
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js
6. Add Environment Variables:
   - `EMAIL_USER`: your_email@gmail.com
   - `EMAIL_PASS`: your_app_password
7. Click "Create Web Service"

### Vercel + External Backend

Since Vercel is frontend-only, you'll need to deploy the backend separately:

1. Deploy the backend to Render (following the steps above)
2. Deploy the frontend to Vercel:
   - Connect your GitHub repository
   - Set the build command to `npm run build`
   - Set the output directory to `dist`
3. Update the API URL in your frontend to point to your Render backend

### Netlify + External Backend

Similar to Vercel:

1. Deploy the backend to Render
2. Deploy the frontend to Netlify:
   - Connect your GitHub repository
   - Set the build command to `npm run build`
   - Set the publish directory to `dist`
3. Update the API URL in your frontend to point to your Render backend

## 🔐 Security Best Practices

1. **Never commit passwords to version control**
   - Keep your `.env` file in `.gitignore`
   - Always use environment variables for sensitive data

2. **Use App Passwords**
   - For Gmail, always use App Passwords instead of your regular password
   - This limits the scope of what can be accessed

3. **Environment Separation**
   - Use different email accounts for development and production
   - Test email configuration in development before deploying

## 🧪 Testing Email Configuration

After deployment, you can test your email configuration:

1. Visit your deployed website
2. Scroll to the Contact section
3. Click "Show Email Configuration Test"
4. Click "Test Config"
5. You should see a success message if everything is configured correctly

## 🆘 Troubleshooting

### Emails Not Sending

1. **Check environment variables**
   - Ensure `EMAIL_USER` and `EMAIL_PASS` are set correctly
   - For Render, check the "Environment" tab in your service settings

2. **Verify App Password**
   - Make sure you're using an App Password, not your regular password
   - Generate a new App Password if needed

3. **Check spam folder**
   - Emails might be going to spam
   - Add your sending email to contacts

### Server Errors

1. **Check logs**
   - Most platforms provide access to application logs
   - Look for error messages related to email sending

2. **Verify SMTP settings**
   - Double-check the host, port, and security settings
   - Some providers require specific configurations

## 🔄 Updates and Maintenance

1. **Regular monitoring**
   - Periodically test the contact form to ensure it's working
   - Check your email inbox for notifications

2. **Security updates**
   - Keep dependencies updated with `npm update`
   - Regularly rotate App Passwords for security

3. **Backup strategy**
   - The SQLite database (`contacts.db`) contains your messages
   - Consider implementing a backup solution for production use