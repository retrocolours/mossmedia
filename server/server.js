// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors'); // Import cors
// require('dotenv').config(); // For environment variables

// const app = express();

// // Middleware
// app.use(bodyParser.json()); // Parse JSON request bodies
// app.use(cors({
//     origin: 'http://localhost:3001', // Frontend origin
//     methods: ['GET', 'POST'],       // Allowed HTTP methods
//     allowedHeaders: ['Content-Type'], // Allowed headers
// }));

// // Routes
// app.post('/send-email', async (req, res) => {
//     const { name, email, phone, weddingDate, location, package, fomoVideo, contactMethod, contactTime, additionalInfo } = req.body;

//     // Nodemailer transporter configuration
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         },
//     });

//     // Email content
//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.RECEIVER_EMAIL,
//         subject: 'New Contact Form Submission',
//         text: `
//             You have a new contact form submission. Here are the details:

//             Name: ${name}
//             Email: ${email}
//             Phone: ${phone}
//             Wedding Date: ${weddingDate}
//             Location: ${location}
//             Video Package: ${package}
//             FOMO Video: ${fomoVideo}
//             Preferred Contact Method: ${contactMethod}
//             Best Contact Time: ${contactTime}
//             Additional Information: ${additionalInfo}
//         `,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('Form submission received and email sent successfully!');
//     }catch (error) {
//             console.error('Error details:', {
//                 message: error.message,
//                 stack: error.stack,
//                 code: error.code,
//                 response: error.response,
//             });
//             res.status(500).send('Failed to send email. Please try again later.');
//         }
// });

// // Start the server
// app.listen(3000, () => console.log('Server is running on http://localhost:3000'));



// console.log('EMAIL_USER:', process.env.EMAIL_USER);
// console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');
// console.log('RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL);


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cors({
    origin: 'http://localhost:3001', // Frontend origin
    methods: ['GET', 'POST'],       // Allowed HTTP methods
    allowedHeaders: ['Content-Type'], // Allowed headers
}));

// Ensure required environment variables are set
if (!process.env.REACT_APP_EMAIL_USER || !process.env.REACT_APP_EMAIL_PASS || !process.env.REACT_APP_RECEIVER_EMAIL) {
    console.error('Missing required environment variables. Please check your .env file.');
    process.exit(1);
}

// Debugging environment variables
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');
console.log('RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL);

// Routes
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy and running.');
});

// Test email endpoint
app.get('/test-email', async (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mossmediainfo@gmail.com',
            pass: 'Awngy eemi jggl geon',
        },
        logger: true, // Enable logging
        debug: true,  // Enable debugging
    });

    const mailOptions = {
        from: 'mossmediainfo@gmail.com',
        to: 'mossmediainfo@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email to verify Nodemailer setup.',
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Test email sent successfully:', result);
        res.status(200).send('Test email sent successfully.');
    } catch (error) {
        console.error('Error sending test email:', error);
        res.status(500).send('Failed to send test email.');
    }
});

// Main email sending endpoint
app.post('/send-email', async (req, res) => {
    console.log('Received form data:', req.body);

    const { name, email, phone, weddingDate, location, package, fomoVideo, contactMethod, contactTime, additionalInfo } = req.body;

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.REACT_APP_EMAIL_USER,
            pass: process.env.REACT_APP_EMAIL_PASS,
        },
        logger: true, // Enable logging
        debug: true,  // Enable debugging
    });

    console.log('Transporter configured successfully');

    const mailOptions = {
        from: process.env.REACT_APP_EMAIL_USER,
        to: process.env.REACT_APP_RECEIVER_EMAIL,
        subject: 'New Contact Form Submission',
        text: `
            You have a new contact form submission. Here are the details:

            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Wedding Date: ${weddingDate}
            Location: ${location}
            Video Package: ${package}
            FOMO Video: ${fomoVideo}
            Preferred Contact Method: ${contactMethod}
            Best Contact Time: ${contactTime}
            Additional Information: ${additionalInfo}
        `,
    };

    console.log('Mail options:', mailOptions);

    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result);
        res.status(200).send('Form submission received and email sent successfully!');
    } catch (error) {
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            response: error.response,
        });
        res.status(500).send('Failed to send email. Please try again later.');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
