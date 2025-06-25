/**
 * Google Apps Script for GSE Audit Form Submissions
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID below with your Google Sheets ID
 * 5. Deploy as a web app with execute permissions set to "Anyone"
 * 6. Copy the web app URL and update YOUR_GOOGLE_APPS_SCRIPT_URL in AuditForm.tsx
 */

// CONFIGURATION - Update these values
const SPREADSHEET_ID = "1-99o33SRSbEMLmPbm0saXReqmnRIbVa27s2GzWdsXB8"; // Replace with your Google Sheets ID
const SHEET_NAME = "auditSubmissions"; // Name of the sheet tab

// Email notification settings (optional)
const SEND_EMAIL_NOTIFICATIONS = true;
const NOTIFICATION_EMAIL = "your-email@example.com"; // Your email address

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Log the submission to Google Sheets
    logToSheet(data);

    // Send email notification (optional)
    if (SEND_EMAIL_NOTIFICATIONS) {
      sendEmailNotification(data);
    }

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error processing form submission:", error);

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Failed to process submission",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function logToSheet(data) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);

      // Add headers
      const headers = [
        "Timestamp",
        "Business Name",
        "Contact Name",
        "Email",
        "Phone",
        "Website",
        "Address",
        "Competitor 1",
        "Competitor 2",
        "Competitor 3",
        "Status",
      ];

      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Prepare the row data
    const rowData = [
      new Date(data.timestamp),
      data.businessName || "",
      data.contactName || "",
      data.email || "",
      data.phone || "",
      data.website || "",
      data.address || "",
      data.competitors[0] || "",
      data.competitors[1] || "",
      data.competitors[2] || "",
      "New",
    ];

    // Add the data to the sheet
    sheet.appendRow(rowData);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, rowData.length);

    console.log("Successfully logged submission to sheet");
  } catch (error) {
    console.error("Error logging to sheet:", error);
    throw error;
  }
}

function sendEmailNotification(data) {
  try {
    const subject = `New Audit Form Submission - ${data.businessName}`;

    const body = `
New audit form submission received:

Business Details:
- Business Name: ${data.businessName}
- Contact Name: ${data.contactName}
- Email: ${data.email}
- Phone: ${data.phone || "Not provided"}
- Website: ${data.website || "Not provided"}
- Address: ${data.address || "Not provided"}

Competitors:
- Competitor 1: ${data.competitors[0] || "Not provided"}
- Competitor 2: ${data.competitors[1] || "Not provided"}
- Competitor 3: ${data.competitors[2] || "Not provided"}

Submission Time: ${new Date(data.timestamp).toLocaleString()}

---
This submission has been automatically logged to your Google Sheets.
`;

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
    });

    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Error sending email notification:", error);
    // Don't throw error here as email is optional
  }
}

// Test function - you can run this to test your setup
function testSetup() {
  const testData = {
    timestamp: new Date().toISOString(),
    businessName: "Test Business",
    contactName: "John Doe",
    email: "test@example.com",
    phone: "555-123-4567",
    website: "https://testbusiness.com",
    address: "123 Test St, Test City, TS 12345",
    competitors: ["Competitor A", "Competitor B", ""],
  };

  try {
    logToSheet(testData);
    console.log("Test successful! Check your Google Sheets.");

    if (SEND_EMAIL_NOTIFICATIONS) {
      sendEmailNotification(testData);
      console.log("Test email sent!");
    }
  } catch (error) {
    console.error("Test failed:", error);
  }
}
