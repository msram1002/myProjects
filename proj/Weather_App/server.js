// access to entire express API
var express = require('express');

// create our application
var app = express();

app.use(express.static('public'));

//start the server at port 3000; localhost:3000
app.listen(3000, function(){
  console.log('Express server is up at port 3000');
})
