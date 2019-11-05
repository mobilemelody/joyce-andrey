require('dotenv').config();

const express = require('express');
const pug = require('pug');
const mysql = require('./dbcon.js');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('mysql', mysql);

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/', function (req, res) {
	let mysql = req.app.get('mysql');
  let sql = "INSERT INTO rsvp (name, num_guests, guest_names, drinks, songs, notes) VALUES (?,?,?,?,?,?)";
  let inserts = [req.body.name, req.body.num_guests, req.body.guest_names, req.body.drinks, req.body.songs, req.body.notes];
  sql = mysql.pool.query(sql, inserts, function(error, results, fields) {
    if(error) {
      let context = {};
      context.error = error;
      res.send(context);
    }
    else {
      res.send();
    }
  });
});

app.listen(PORT, function(){
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});