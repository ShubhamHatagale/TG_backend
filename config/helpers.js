// const Mysqli = require('mysql2');
const jwt = require('jsonwebtoken');
const log4js = require('log4js')
const multer = require('multer');
const nodemailer = require("nodemailer");


// Logger configuration
log4js.configure({
    appenders: { fileAppender: { type: 'file', filename: 'logs/all-the-logs.log' } },
    categories: { default: { appenders: ['fileAppender'], level: 'info' } }
});

// Create the logger
const logger = log4js.getLogger();


const SendMail = (toEmail, toBcc, sub, content, res) => {
    console.log(process.env.GMAIL_PASS + " " + process.env.GMAIL_USER);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        type: "SMTP",
        port: 465,
        host: "166.62.27.179",
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    });
    var mailOptions = {
        from: process.env.GMAIL_USER,
        to: toEmail,
        bcc: toBcc,
        subject: sub,
        html: content,
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
    logger: logger,
    SendMail: SendMail,
    fileStorage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log('here');
            cb(null, './assets/images')
        },
        filename: (req, file, cb) => {
            // cb(null, new Date().toISOString() + '-' + file.originalname)
            cb(null, file.originalname)
        }
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'video/mp4') {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }

};
