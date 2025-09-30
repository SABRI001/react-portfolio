# EmailJS Configuration Fix Guide

## 🔍 **Current Issue Analysis**

You're getting a **400 error** from EmailJS, which typically means:

1. **Incorrect Service ID or Template ID** (most common)
2. **Template variables mismatch**
3. **Invalid public key**
4. **EmailJS service not properly configured**

## 🔧 **Step-by-Step Fix**

### Step 1: Get Your Real EmailJS IDs

1. Go to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. **Email Services** → Click on your service → Copy the **Service ID**
   - Should look like: `service_abcd1234` (NOT `service_portfolio`)
3. **Email Templates** → Click on your template → Copy the **Template ID**
   - Should look like: `template_xyz5678` (NOT `template_contact`)
4. **Account** → Copy your **Public Key**
   - Should be a long string like: `RT0Nhrv-sO0DRFYqh` (yours looks correct)

### Step 2: Update Your Configuration

Edit `/src/config/emailConfig.js`:

```javascript
export const emailConfig = {
  serviceID: 'service_YOUR_ACTUAL_ID',    // Replace with real Service ID
  templateID: 'template_YOUR_ACTUAL_ID',  // Replace with real Template ID
  publicKey: 'RT0Nhrv-sO0DRFYqh',        // Your public key (looks correct)
};
```

### Step 3: Fix Your Email Template

Your EmailJS template should have these **exact variable names**:

**Template Content:**
```
New message from your portfolio:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

**Template Settings:**
- **To Email:** sabridokhan2@gmail.com
- **From Name:** Portfolio Contact
- **Reply To:** {{from_email}}

### Step 4: Test the Configuration

1. Save your changes
2. Open your portfolio contact form
3. Open browser Developer Tools (F12) → Console tab
4. Submit a test message
5. Check console for debug information

## 🐛 **Debug Information**

The updated code now provides detailed logging:

- Configuration validation
- Template parameters
- EmailJS response details
- Error messages with specific guidance

Check your browser console after submitting the form to see exactly what's happening.

## 🚨 **Common Issues & Solutions**

### Issue 1: "Service Error" in EmailJS Dashboard
**Solution:** Your Gmail service might need re-authentication
1. Go to Email Services
2. Click "Reconnect" on your Gmail service
3. Re-authorize your Gmail account

### Issue 2: Template Variables Don't Match
**Solution:** Use exactly these variables in your template:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

### Issue 3: 400 Bad Request
**Solution:** Usually means wrong Service ID or Template ID
1. Double-check IDs from your dashboard
2. Make sure no typos in configuration

### Issue 4: Public Key Issues
**Solution:** Get fresh public key:
1. Account → General → Copy Public Key
2. Update in emailConfig.js

## 🔍 **Quick Verification Checklist**

- [ ] Service ID starts with `service_` and is from your dashboard
- [ ] Template ID starts with `template_` and is from your dashboard
- [ ] Public key is the real one from Account settings
- [ ] Template variables match exactly: `from_name`, `from_email`, `subject`, `message`
- [ ] Gmail service is connected and working
- [ ] Template "To Email" is set to `sabridokhan2@gmail.com`

## 🎯 **Alternative: Test with Basic Template**

If you're still having issues, create a simple test template:

**Subject:** Test from Portfolio

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}
```

This minimal template should work and help identify if the issue is with your template complexity.

## 📞 **Need More Help?**

1. Check the browser console after form submission
2. Look at EmailJS dashboard → Email History for failed attempts
3. Try the debug mode by checking console logs
4. The form will automatically fall back to mailto if EmailJS fails

Your current fallback system ensures the contact form always works, even if EmailJS isn't configured properly!