# Google Sheets Integration Setup Guide

## Step 1: Google Sheet Banayiye

1. **Google Sheets mein ek nayi sheet banayiye**
2. **Sheet mein columns setup kariye (Row 1 mein headers):**
   - A1: **Full Name**
   - B1: **Email** 
   - C1: **Country**
   - D1: **Game Interest**
   - E1: **Interest Area**
   - F1: **Date**
   - G1: **Time**
   - H1: **Timestamp**

## Step 2: Google Apps Script Setup

1. **Apps Script kholiye:**
   - Google Sheet mein jao → **Extensions** → **Apps Script**

2. **Yeh code paste kariye:**

```javascript
function doPost(e) {
  try {
    // Your sheet ka URL ya ID
    const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Yahan apni sheet ka ID daliye
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Data parse kariye
    const data = JSON.parse(e.postData.contents);
    
    // New row add kariye
    sheet.appendRow([
      data.full_name || '',
      data.email || '',
      data.country || '',
      data.game_interest || '',
      data.interest || '',
      data.date || '',
      data.time || '',
      data.timestamp || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy Apps Script

1. **Save kariye** (Ctrl+S)
2. **Deploy kariye:**
   - **Deploy** button → **New deployment**
   - **Type**: Web app
   - **Execute as**: Me
   - **Who has access**: Anyone
   - **Deploy** button dabayiye

3. **Permissions diye:**
   - **Authorize access** → **Advanced** → **Go to your project** → **Allow**

4. **Web App URL copy kariye** (yeh URL aapko React code mein paste karna hai)

## Step 4: React Code Update

1. **Waitlist.jsx mein URL update kariye:**
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YAHAN_APKA_WEB_APP_URL_PASTE_KARIYE';
   ```

## Step 5: Test Kariye

1. **Form submit kariye**
2. **Google Sheet check kariye ke data aa raha hai ya nahi**

## Important Notes:

- ⚠️ **Sheet ID nikalne ke liye:** Google Sheet ka URL dekho → `docs.google.com/spreadsheets/d/SHEET_ID_YAHAN_HAI/edit`
- 🔒 **Privacy:** Web app kisi ke liye bhi accessible hai, isliye sensitive data avoid kariye
- 📊 **Real-time:** Data turant Google Sheet mein show hoga
- 🚀 **Free:** Google ka free service hai, koi cost nahi

## Troubleshooting:

**Agar form submit nahi ho raha:**
1. Apps Script permissions check kariye
2. Sheet ID sahi hai ya nahi verify kariye
3. Web App URL correctly copied hai ya nahi
4. Console errors check kariye browser mein

**Form working hai lekin data nahi aa raha:**
1. Apps Script logs check kariye
2. Column headers exactly match kar rahe hain ya nahi
3. Sheet permissions check kariye
