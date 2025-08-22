# EmailJS Setup Instructions

## Overview
This document provides instructions on how to set up EmailJS for the contact form in the portfolio website.

## Steps to Configure EmailJS

1. **Create an EmailJS Account**
   - Go to [EmailJS website](https://www.emailjs.com/) and sign up for an account
   - The free tier allows 200 emails per month

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account
   - Note the **Service ID** that is generated

3. **Create an Email Template**
   - Go to "Email Templates" in your EmailJS dashboard
   - Click "Create New Template"
   - Design your email template using the following variables:
     - `{{user_name}}` - The name from the contact form
     - `{{user_email}}` - The email from the contact form
     - `{{user_phone}}` - The phone number from the contact form
     - `{{message}}` - The message from the contact form
   - Save the template and note the **Template ID** that is generated

4. **Get Your Public Key**
   - Go to "Account" > "API Keys"
   - Copy your **Public Key**

5. **EmailJS Credentials Status**
   - The EmailJS credentials have already been added to the `src/Contact.jsx` file:
   ```javascript
   const serviceId = 'service_jmb09ry'; // EmailJS service ID
   const templateId = 'template_13dwfrb'; // EmailJS template ID
   const publicKey = 'p66jkoEcTjo8MqeFm'; // EmailJS public key
   ```
   - These credentials are now properly configured and ready to use

## Testing
1. Fill out the contact form on your website
2. Click the Submit button
3. You should see a success toast notification if the email was sent successfully
4. Check your email inbox to confirm that you received the message

## Troubleshooting
- If emails are not being sent, check the browser console for error messages
- Verify that your EmailJS account is active and that you haven't exceeded the free tier limits
- Make sure your email template variables match the field names in the contact form

## Additional Resources
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration Guide](https://www.emailjs.com/docs/examples/reactjs/)