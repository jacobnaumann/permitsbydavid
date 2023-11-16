// CallToAction.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../../common.css'; // assuming common styles are used

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>Ready to Start Your Permit Application Process?</h2>
        <p>Let's make your permitting process quick and hassle-free. Get in touch with us today!</p>
        <Link to="/contact" className="btn btn-cta">Contact Us</Link> {/* This button will link to the Contact page */}
      </div>
    </section>
  );
};

export default CallToAction;
