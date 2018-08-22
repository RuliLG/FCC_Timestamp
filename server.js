// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html

app.get('/api/timestamp/:date_string?', function(req, res) {
  try {
    var date = req.params.date_string ? new Date(req.params.date_string) : new Date();
    res.json({unix: date.getTime(), utc: date.toUTCString()});
  }
  catch (e) {
    res.json({error: 'Invalid date'});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
