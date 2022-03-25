const jwt = require('jsonwebtoken');
const multer = require('multer');
const nodemailer = require("nodemailer");

const SendMail = (toEmail, toBcc, sub, content, res) => {
    console.log(`21conversant#ravikant` + " ," + `conversantravikantm@gmail.com`);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        type: "SMTP",
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: `conversantravikantm@gmail.com`,
            pass: `21conversant#ravikant`,
        }
    });
    var mailOptions = {
        from: `conversantravikantm@gmail.com`,
        to: `shubhamhatagale02@gmail.com`,
        subject: `Action Requested:  Performance Feedback ()`,
        html: `<p><b>Your OTP is checking1234</b></p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Failed in sending mail');
            console.dir({ success: false, existing: false, sendError: true });
            console.dir(error);
            res.end('Failed in sending mail');
        } else {
            console.log('Successful in sending email');
            console.dir({ success: true, existing: false, sendError: false });
            console.dir(response);
            res.end('Successful in sending email');
        }
    });
}


module.exports = {
    SendMail: SendMail,
};
