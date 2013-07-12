var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    //var databuf = new Buffer(50);
    /*fs.readFileSync('index.html', function(err,databuf){
      if(err)throw err;
      console.log(databuf);
  });*/
response.send("test"/*databuf.toString('utf-8')*/);

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
