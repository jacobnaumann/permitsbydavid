// Contact.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the sending of the form
    setSubmitted(true);
  };

  return (
    <div>
      <div className="contact-container">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">

            {/* CONTACT FORM */}
            <h2>We'd Love to Hear From You!</h2>
            <div className="input-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required />
            </div>

            {/* CAPTCHA */}
            <div className="input-group captcha">
              {/* Here you would implement the CAPTCHA component */}
              <p>CAPTCHA will go here.</p>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>Thank You for Your Inquiry!</h2>
            <p>We truly appreciate you reaching out to us. Our team has received your message and will be in touch soon!</p>
            <p> If you need immediate assistance, please call us at 727-798-8182.</p>
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
