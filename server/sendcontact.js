require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const multer = require('multer');
const upload = multer();

// Create a Nodemailer transporter using your SMTP settings
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,   // Your SMTP host
    port: process.env.SMTP_PORT,   // Your SMTP port
    secure: false,                  // Whether your SMTP server uses SSL
    auth: {
        user: process.env.SMTP_USER,     // SMTP username
        pass: process.env.SMTP_PASSWORD  // SMTP password
    }
});

router.post('/send-email', upload.none(), async (req, res) => {
    try {
        const { name, businessName, email, phoneNumber, message } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_FROM,    // Sender address
            to: process.env.EMAIL_TO,        // List of recipients
            subject: 'Permitsbydavid.com - CONTACT FORM SUBMISSION', // Subject line
            text: `Name: ${name}\nBusiness Name: ${businessName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`, // Plain text body
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.json({ success: false, message: 'Failed to send email' });
    }
});

module.exports = router;
