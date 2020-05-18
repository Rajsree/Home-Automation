const express = require('express');
const app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'signzyhomeautomation'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('We are now connected with mysql database...');
  connection.query("SELECT * FROM Devices", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
})
  
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'OUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/devices', (req,res) => {
  connection.query("SELECT * FROM Devices", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})