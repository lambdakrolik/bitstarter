#!/usr/bin/env node

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
    var databuf = new Buffer(50);
    fs.readFileSync('index.html', function(err,databuf){
      if(err)throw err;
      console.log(databuf);
  });
response.send(databuf.toString('utf-8'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
