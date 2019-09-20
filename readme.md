# Connect the Strava API to Google Sheets and Data Studio

Example of how to connect the Strava API with Google Sheets using Apps Script.

Full how-to tutorial: [How to connect the Strava API with Google Sheets and Data Studio](https://www.benlcollins.com/spreadsheets/strava-api-with-google-sheets/)

___

## Steps:

1. Create a new Google Sheet
2. Add the Apps Script OAuth 2 library
3. Create a second gs file, oauth.gs
4. Add the code from code.gs and oauth.gs files in this repo
5. Setup your application in Strava: *Settings > My API Application*
6. Set the *Authorization Callback Domain* to `script.google.com`
7. Run the scripts and authenticate the connection

This basic implementation will paste 4 fields of activity data into your Google Sheet: ID, Name, Type and Distance

You can of course grab more!

Explore the data with Data Studio:

![Data Studio Strava dashboard](https://www.benlcollins.com/wp-content/uploads/2019/09/dashboard_v1-copy.jpg "Data Studio Strava Activity Dashboard")