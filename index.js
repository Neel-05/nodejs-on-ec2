var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('hello, This is devops project by avik, syed and soumik'); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000
