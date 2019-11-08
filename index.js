require('dotenv').config();

const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const {google} = require('googleapis');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
	const scopes = 'https://www.googleapis.com/auth/spreadsheets';
	const sheets = google.sheets('v4');
	
	// Google authorization
	let jwt = new google.auth.JWT(
    process.env.GOOGLE_CLIENT_EMAIL, 
    null, 
    process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
    scopes
  );

	// Add form data
  let row = [];
  for (let key in req.body) {
  	row.push(req.body[key]);
  }
  
  // Append values to spreadsheet
  sheets.spreadsheets.values.append({
    spreadsheetId: '11_7sHchw2yD3MI1UK5mP5cD4m5Dg5BHsguqT9GidpwI',
    range: 'A:F',
    auth: jwt,
    valueInputOption: 'USER_ENTERED',
    resource: {values: [row]}
  }, function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result);
    }
  });
});

app.listen(PORT, function(){
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});