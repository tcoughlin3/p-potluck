var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello World');
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
