var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello Pini - Papa likes pini, the laddoo');
 }).listen(8080);