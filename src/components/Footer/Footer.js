// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // assuming common styles are imported here

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about-us" className="footer-link">About Us</Link>
          <Link to="/services" className="footer-link">Services</Link>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <Link to="/" className="footer-link">FAQ</Link>
          <Link to="/contact" className="footer-link">Contact Us</Link>
          <Link to="/" className="footer-link">Blog</Link>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          {/* Assuming you would replace these spans with icons or actual links */}
          <span className="footer-link">LinkedIn</span>
          <span className="footer-link">Facebook</span>
          <span className="footer-link">Twitter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
