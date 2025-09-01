// Google Apps Script Code - Apps Script Editor mein yeh code paste kariye

function doPost(e) {
  try {
    // Console logging for debugging
    console.log('Received POST request');
    console.log('Content type:', e.postData.type);
    console.log('Raw data:', e.postData.contents);
    
    // Your Google Sheet ID - Yahan apni sheet ka ID daliye
    const SHEET_ID = '1eXTfWAYICSKfetMWXb-RBT7nNfX7zodPHaMJO7Z53SI'; // Sheet URL se ID copy kariye
    
    // Parse incoming data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
      console.log('Parsed data:', data);
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'error', 
          message: 'Invalid JSON data'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Open the Google Sheet
    let sheet;
    try {
      sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
      console.log('Sheet opened successfully');
    } catch (sheetError) {
      console.error('Sheet error:', sheetError);
      return ContentService
        .createTextOutput(JSON.stringify({
          status: 'error', 
          message: 'Cannot access sheet: ' + sheetError.toString()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Check if this is the first entry (add headers)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Full Name', 
        'Email', 
        'Country', 
        'Game Interest', 
        'Interest Area', 
        'Date', 
        'Time', 
        'Timestamp'
      ]);
      console.log('Headers added');
    }
    
    // Add the data row
    const rowData = [
      data.full_name || '',
      data.email || '',
      data.country || '',
      data.game_interest || '',
      data.interest || '',
      data.date || '',
      data.time || '',
      data.timestamp || ''
    ];
    
    sheet.appendRow(rowData);
    console.log('Data row added:', rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('General error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - Apps Script mein test karne ke liye
function testPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        full_name: 'Test User',
        email: 'test@example.com',
        country: 'Pakistan',
        game_interest: 'PUBG',
        interest: 'eSports Player',
        date: new Date().toLocaleDateString('en-US'),
        time: new Date().toLocaleTimeString('en-US'),
        timestamp: new Date().toISOString()
      }),
      type: 'application/json'
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}
