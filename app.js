const fs = require('fs');
const nodemailer = require('nodemailer');

// Lee el contenido de tu archivo HTML
const htmlContent = fs.readFileSync('./prueba.html', 'utf-8');

// Crea una instancia de Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
        user: 'a28c204ec69c17',
        pass: 'bac7e277a1d5cb'
    }
});

// Define la información del correo electrónico
const mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Asunto del correo electrónico',
    html: htmlContent
};

// Envia el correo electrónico
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});