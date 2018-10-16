var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = "<h4>Parameter Listing</h4>";
    var i;
    for (i in q) {
        txt += i + "  -  " + q[i] + "<br>";
    }
    res.end(txt);
}).listen(8080); 

