var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello there.  My laptop is now an HTTP Server!');
}).listen(8080); 