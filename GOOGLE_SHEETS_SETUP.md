# Google Sheets Integration Setup for GSE Audit Form

## Quick Setup Steps

### 1. Create Google Sheets

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "GSE Audit Submissions" (or whatever you prefer)
4. Copy the Sheets ID from the URL (the long string between `/spreadsheets/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1ABC123xyz456/edit#gid=0`
   - The ID is: `1ABC123xyz456`

### 2. Set Up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script.js`
5. Update the configuration variables:
   ```javascript
   const SPREADSHEET_ID = "1-99o33SRSbEMLmPbm0saXReqmnRIbVa27s2GzWdsXB8"; // Paste your Sheets ID here
   const NOTIFICATION_EMAIL = "VisibilityAudit@gse.codes"; // Your email address
   ```

### 3. Deploy the Script

1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set these options:
   - Execute as: "Me"
   - Who has access: "Anyone"
4. Click "Deploy"
5. Copy the web app URL (it will look like: `https://script.google.com/macros/s/ABC123/exec`)

### 4. Update Your Form

1. Open `src/components/funnel/AuditForm.tsx`
2. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your web app URL:
   ```typescript
   const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
   ```

### 5. Test the Setup

1. In Google Apps Script, run the `testSetup()` function to verify everything works
2. Submit a test form on your website
3. Check your Google Sheets to see if the data appears

## What You'll Get

### Google Sheets Columns:

- Timestamp
- Business Name
- Contact Name
- Email
- Phone
- Website
- Address
- Business Type
- Target Location
- Goals
- Competitor 1
- Competitor 2
- Competitor 3
- Status

### Email Notifications (Optional):

- Automatic email sent to you for each submission
- Contains all form data in a readable format
- Can be disabled by setting `SEND_EMAIL_NOTIFICATIONS = false`

## Security Notes

- The script only accepts POST requests
- All data is logged with timestamps
- Email notifications are optional and can be turned off
- The script is deployed with "Anyone" access but only responds to properly formatted requests

## Troubleshooting

### If submissions aren't appearing:

1. Check the browser console for errors
2. Verify the Google Apps Script URL is correct
3. Make sure the Google Apps Script is deployed as a web app
4. Run the `testSetup()` function in Google Apps Script

### If emails aren't sending:

1. Check that `SEND_EMAIL_NOTIFICATIONS = true`
2. Verify your email address is correct
3. Gmail may have limits on automated emails

### Common Issues:

- **403 Forbidden**: Script not deployed correctly or wrong permissions
- **CORS Error**: Normal for Google Apps Script, doesn't affect functionality
- **Script not found**: Double-check the web app URL

## Additional Features You Can Add

- Slack notifications
- Automatic follow-up emails
- Integration with CRM systems
- Data validation and cleaning
- Duplicate detection

Need help? The Google Apps Script has detailed error logging that will help identify any issues.
