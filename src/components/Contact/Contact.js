// Contact.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Function to dynamically load the reCAPTCHA script
    const loadReCaptcha = () => {
      const scriptId = 'recaptcha-script';
      const existingScript = document.getElementById(scriptId);

      if (!existingScript) {
        const script = document.createElement('script');
        script.id = scriptId; // Assign an ID to the script tag
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    loadReCaptcha();

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const existingScript = document.getElementById('recaptcha-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        navigate('/');
      }, 20000); // 20 seconds delay
    }
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts or if submitted changes
  }, [submitted, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submission started...");

    // Prepare form data for submission
    const formData = new FormData(event.target);
    console.log('Form Data:', Object.fromEntries(formData.entries())); // Log form data

    // Add reCAPTCHA response token to formData
    const recaptchaResponse = document.querySelector('.g-recaptcha-response').value;
    console.log('reCAPTCHA response token:', recaptchaResponse); // Log the reCAPTCHA response token
    formData.append('token', recaptchaResponse);

    // Send formData to your server
    try {
      const response = await fetch('https://permitsbydavid.com/server/verify-recaptcha' , { //http://localhost:3001/server/verify-recaptcha for testing
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Server response:', data); // Log the response from the server

      if (data.success) {
        // Handle successful submission and reCAPTCHA verification
        console.log('reCAPTCHA verified successfully');

        // Send the form data to the email-sending endpoint
        const emailResponse = await fetch('https://permitsbydavid.com/server/send-email ', { //http://localhost:3001/server/send-email
          method: 'POST',
          body: formData, // Send the same form data
        });
        const emailData = await emailResponse.json();
        if (emailData.success) {
          console.log('Form and email sent successfully');  // Log the success
          setSubmitted(true);
        } else {
          console.error('Failed to send email:', emailData.message);
        }
      } else {
        // Handle failed reCAPTCHA verification
        console.error('reCAPTCHA verification failed:', data.message);
      }
    } catch (error) {
      console.error('Submission error:', error); // Log any submission errors
    }
  };

  return (
    <div>
      <div className="contact-container">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>We'd Love to Hear From You!</h2>
            <p>Please provide just a bit of information and we'll be in touch soon!</p>

            {/* Name Input */}
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            {/* Business Name Input */}
            <div className="input-group">
              <label htmlFor="business-name">Business Name:</label>
              <input type="text" id="business-name" name="businessName" />
            </div>

            {/* Email Input */}
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            {/* Phone Number Input */}
            <div className="input-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phoneNumber" />
            </div>

            {/* Message Textarea */}
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>

            {/* CAPTCHA */}
            <div className="g-recaptcha" data-sitekey="6LdJ3xspAAAAAIuxsllev6e9XnJtNnQ15d1aEUBd"></div>


            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You for Your Inquiry!</h2>
            <p>We truly appreciate you reaching out to us. Our team has received your message and will be in touch soon!</p>
            <p>If you need immediate assistance, please call us at 727-798-8182.</p>
            <p>You will be automatically redirected to our homepage in 10 seconds where you can continue to explore our services and learn more about how we can help.</p>
            <p>Or <button className="redirect-button" onClick={() => navigate('/')}>Click here</button> to return to the homepage now.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;