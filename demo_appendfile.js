var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.appendFile('newfile1.html', 'Hello content!', function(err) {
        if (err) throw err;
        console.log('Appended File!');
    });
    res.end();
}).listen(8080); 

