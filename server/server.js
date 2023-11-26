const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer(); 

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    next();
  });

// Your reCAPTCHA verification endpoint
app.post('/verify-recaptcha', upload.none(), async (req, res) => {
  const token = req.body.token;
  console.log('Received token:', token); 
  const secretKey = '6LdJ3xspAAAAAMqjRlrE0efKuwlwNOxsWgjA9RCf'; 

  try {
    const googleResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`);
    console.log('Google reCAPTCHA verification response:', googleResponse.data); 
    if (googleResponse.data.success) {
      // Successful verification
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.json({ success: true, message: 'CAPTCHA passed' });
    } else {
      // Failed verification
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.json({ success: false, message: 'CAPTCHA failed' });
    }
  } catch (error) {
    console.error('Error in reCAPTCHA verification:', error); 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.status(500).send('Server error during reCAPTCHA verification');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));