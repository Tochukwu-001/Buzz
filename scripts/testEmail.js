const nodemailer = require('nodemailer');

// Replace with your email server details
const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 465,
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    // secure: process.env.EMAIL_SERVER_PORT == 465,
    secure: true, // true for 465, false for other ports
    auth: {
        // user: "tochukwuosiedo001@gmail.com",
        // pass: "bybq ttco kgsm fjzw",
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
    },
});

// Email details
const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: 'ozjosh128@gmail.com',   // replace with recipient email
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer.', // plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Email sent:', info.response);
});
