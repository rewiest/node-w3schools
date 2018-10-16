var http = require('http');
var dt = require('./myfirstmodule2');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The numeric month is currently: " + dt.myDateMonth());
    res.end();
}).listen(8080); 

