var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/string', function(req, res) {
  res.send('Got a GET to /string')
});

app.get('/', function(req, res) {
  // res.status(200).sendFile('tom_coughlin.jpg', { root: __dirname + '/../public/' }, function (err) {
  res.status(200).send('/ GET received');
  //res.sendStatus(200);
});

app.post('/', function(req, res) {
  res.send('Got a POST request');
});

app.put('/users', function(req, res) {
  res.send('Got a PUT request');
});

app.delete('/users', function(req, res) {
  res.send('Got a DELETE request');
})

app.listen(3000, function() {
  console.log('Server listening on port 3000')
});

module.exports = app;
