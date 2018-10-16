var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'aol',
    auth: {
        user: 'lioncrazed@aol.com',
        pass: '******'
    }
});
var mailOptions = {
    from: 'lioncrazed@aol.com',
    to: 'lioncrazed@gmail.com',
    subject: 'Sending HTML Email Using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


