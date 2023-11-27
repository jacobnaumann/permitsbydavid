const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const captchaRoute = require('./captcha'); // Update with the correct path
const sendContactRoute = require('./sendcontact'); // Update with the correct path

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Use routes
app.use('/server', captchaRoute);
app.use('/server', sendContactRoute);

const PORT = process.env.EXPRESS_PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));