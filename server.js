const express = require('express');
const app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// console.log that server is up and running
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
  });
})
  
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.get('/devices', (req,res) => {
  connection.query("SELECT * FROM Devices", function (err, result) {
    if (err) throw err;
    res.send({devices : result});
  });
})

app.post('/device', (req, res) => {
  var sql = "INSERT INTO Devices (title) VALUES ('" + req.body.title + "')";
  connection.query(sql, function (err, success) {
    if (err) throw err;
    connection.query("SELECT * FROM Devices", function (err, result){
      if (err) throw err;
      res.send({devices:result});
    })
  }); 
})

app.delete('/device/:id', (req, res) => {
  var sql = "DELETE FROM Devices WHERE id =  " + req.params.id ;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    connection.query("SELECT * FROM Devices", function (err, result){
      if (err) throw err;
      res.send({devices:result});
    })
  });
});

  app.put('/device/:id/:status', (req, res) => {
    var sql = "UPDATE Devices SET STATUS=" +req.params.status+ " WHERE id =  " + req.params.id ;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Status updated in Device! " + result.message);
      connection.query("SELECT * FROM Devices", function (err, result){
        if (err) throw err;
        res.send({devices:result});
      })
    })
  });