var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var databuf = new Buffer(50);
var datastring;    
fs.readFileSync('index.html', 'utf8', function(err,datastring){
      if(err)throw err;
      console.log(datastring);
  });
response.send('ueay'/*datastring*/);
//response.send(databuf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
