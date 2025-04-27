const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail address
    pass: 'your-app-password'     // Replace with your Gmail app password
  }
});

// Email content
const mailOptions = {
  from: 'your-email@gmail.com',    // Replace with your Gmail address
  to: 'kanzlei@lederlelaw.com',
  subject: 'Test Email from Website Contact Form',
  text: `
Hallo,

Dies ist eine Test-Email vom Kontaktformular.

Mit freundlichen Grüßen,
Ihr Webseiten-Team
  `.trim()
};

// Send the email
transporter.sendMail(mailOptions)
  .then(info => {
    console.log('Email sent successfully');
    console.log('Message ID:', info.messageId);
  })
  .catch(error => {
    console.error('Error sending email:', error);
  });