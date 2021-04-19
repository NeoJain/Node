//Import required modules − We use the require directive to load Node.js modules.
var http = require('http');

//Create server − A server which will listen to client's requests similar to Apache HTTP Server.
// Read request and return response − The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.

http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello Pini - Papa likes pini, the laddoo');
 }).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
