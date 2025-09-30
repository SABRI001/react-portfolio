# EmailJS Setup Guide

Follow these steps to set up real email sending for your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended):
   - **Gmail**: Select "Gmail" and connect your Gmail account
   - **Outlook**: Select "Outlook" and connect your Outlook account
   - **Other**: You can use other providers like Yahoo, etc.

4. Give your service a descriptive name like "Portfolio Contact"
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** Portfolio Contact: {{subject}}

**Content:**
```
New message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to this email to respond to {{from_name}}.
```

4. Set the template settings:
   - **To Email:** sabridokhan2@gmail.com
   - **From Name:** {{from_name}}
   - **From Email:** (use your connected email service)
   - **Reply To:** {{from_email}}

5. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Your Public Key

1. Go to "Account" > "General" in your EmailJS dashboard
2. Find your **Public Key** (e.g., "user_abc123xyz")

## Step 5: Update Configuration

Edit the file `/src/config/emailConfig.js` and replace the placeholder values:

```javascript
export const emailConfig = {
  serviceID: 'your_service_id_here',     // Replace with your Service ID
  templateID: 'your_template_id_here',   // Replace with your Template ID
  publicKey: 'your_public_key_here',     // Replace with your Public Key
};
```

## Step 6: Test the Contact Form

1. Save all files and restart your development server
2. Go to your contact form
3. Fill out a test message
4. Submit the form
5. Check your email (sabridokhan2@gmail.com) for the test message

## Security Notes

- The public key is safe to expose in client-side code
- EmailJS free plan allows 200 emails per month
- Consider upgrading to a paid plan for production use
- Set up rate limiting in EmailJS dashboard to prevent spam

## Troubleshooting

If emails aren't working:

1. Check browser console for errors
2. Verify all IDs are correct in emailConfig.js
3. Make sure your email service is properly connected
4. Check EmailJS dashboard for failed sends
5. Ensure template variables match exactly

## EmailJS Dashboard URLs

- **Dashboard:** https://dashboard.emailjs.com/
- **Services:** https://dashboard.emailjs.com/admin
- **Templates:** https://dashboard.emailjs.com/admin/templates
- **Account:** https://dashboard.emailjs.com/admin/account

## Alternative: Environment Variables (Recommended for Production)

For better security in production, you can use environment variables:

1. Create `.env.local` file in your project root:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `emailConfig.js`:
```javascript
export const emailConfig = {
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};
```

3. Add `.env.local` to `.gitignore` to keep credentials private