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
    subject: 'Sending Text Email Using Node.js',
    text: 'That was easy!'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});


