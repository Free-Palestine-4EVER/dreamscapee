# Deployment Guide for Wadi Rum Personal Website

## Prerequisites

Before deploying to Vercel, ensure you have:

1. A Vercel account
2. Git repository with your code
3. Required environment variables

## Required Environment Variables

Set these environment variables in Vercel project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |
| `EMAIL_USER` | Email address for receiving inquiries | Yes |
| `EMAIL_PASSWORD` | Email password (if using SMTP) | No |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the website | No |

## Deployment Steps

1. **Import your project to Vercel**:
   - Connect to your Git repository
   - Select the repository containing your project

2. **Configure project settings**:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Set Environment Variables**:
   - Go to your project settings
   - Navigate to the Environment Variables section
   - Add all required environment variables
   - Make sure to mark them as "Production" environments

4. **Deploy**:
   - Click "Deploy" button
   - Vercel will build and deploy your application

## Troubleshooting Common Issues

1. **Missing Environment Variables**:
   - If you see errors related to missing environment variables, check you've added all required variables.

2. **Build Errors**:
   - Check the build logs for specific error messages
   - Common issues include missing dependencies or incompatible package versions

3. **Deployment Blocked**:
   - Check your account status and verify that your deployment complies with platform policies

4. **Email Service Not Working**:
   - Verify your Resend API key is correct
   - Ensure the email templates are properly formatted

## Post-Deployment

After successful deployment:

1. Test the contact form to ensure emails are being sent correctly
2. Check all pages and functionality
3. Set up a custom domain if desired

