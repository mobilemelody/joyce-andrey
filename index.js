require('dotenv').config();

const express = require('express');
const pug = require('pug');

const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, function(){
  console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});