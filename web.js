var express = require('express');

var app = express.createServer(express.logger());

var f = fs.readFileSync("index.html");

var resp = f.toString();


app.get('/', function(request, response) {
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
