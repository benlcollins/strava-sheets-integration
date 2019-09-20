// custom menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();

  ui.createMenu('Strava App')
    .addItem('Get data', 'getStravaActivityData')
    .addToUi();

}

// Get athlete activity data
function getStravaActivityData() {
  
  // get the sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet1');

  // call the Strava API to retrieve data
  var data = callStravaAPI();
  
  // empty array to hold activity data
  var stravaData = [];
    
  // loop over activity data and add to stravaData array for Sheet
  data.forEach(function(activity) {
    
    var arr = [];
    
    // add data 
    arr.push(
      activity.id,
      activity.name,
      activity.type,
      activity.distance
    );
    
    stravaData.push(arr);
    
  });
  
  // paste the values into the Sheet
  sheet.getRange(sheet.getLastRow() + 1, 1, stravaData.length, stravaData[0].length).setValues(stravaData);
  
}


// call the Strava API
function callStravaAPI() {
  
  // set up the service
  var service = getStravaService();
  
  if (service.hasAccess()) {
    Logger.log('App has access.');
    
    var endpoint = 'https://www.strava.com/api/v3/athlete/activities';
    var params = '?after=1546300800&per_page=200';
    
    var headers = {
      Authorization: 'Bearer ' + service.getAccessToken()
    };
    
    var options = {
      headers: headers,
      method : 'GET',
      muteHttpExceptions: true
    };
    
    var response = JSON.parse(UrlFetchApp.fetch(endpoint + params, options));
    
    return response;
    
  }
  else {
    Logger.log("App has no access yet.");
    
    // open this url to gain authorization from github
    var authorizationUrl = service.getAuthorizationUrl();
    
    Logger.log("Open the following URL and re-run the script: %s",
        authorizationUrl);
  }
}