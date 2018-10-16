var http = require('http');
var url = require('url');
var nodemailer = require('nodemailer');

http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == '/sendmail') {
        var q = url.parse(req.url, true).query;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Mail Service: ' + q.mailservice + '<br>');
        var txt = "<h4>Parameter Listing</h4>";        
        var i;
        for (i in q) {
            txt += i + "  -  " + q[i] + "<br>";
        }
        res.end(txt);
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="sendmail" method="post" enctype="multipart/form-data">');
        res.write('<h4>Send Email</h4>');
        res.write('Mail Service <input type="text" name="mailservice" value="gmail"><br>');
        res.write('Userid <input type="email" name="mailuserid"><br>');
        res.write('Password <input type="password" name="mailpassword"><br><br>');
        res.write('To <input type="email" name="mailto"><br>');
        res.write('Subject <input type="text" name="mailsubject"><br>');
        res.write('Body <textarea name="mailbody" rows="10" cols="30"></textarea><br><br>');
        res.write('<input type="submit" value="Send Email">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080); 

