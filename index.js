var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello everyone, This is devops project by Avik, Syed and Soumik.'); //write a response to the client
  res.end(); 
}).listen(4000); //the server object listens on port 4000
