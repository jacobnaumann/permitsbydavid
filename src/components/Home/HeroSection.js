//HeroSection.js

import React from 'react';
import '../../common.css'; // assuming you're using common styles

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Streamlining Your Permit Process in Central Florida</h1>
        <p className="subheading">Expert handling of building, electrical, and plumbing permits, and more, with unmatched efficiency</p>
        <div className="hero-cta">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
