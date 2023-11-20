//HeroSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // assuming you're using common styles

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Streamlining Your Permit Process in Central Florida</h1>
        <p className="subheading">Expert handling of building, electrical, and plumbing permits, and more, with unmatched efficiency</p>
        <div className="hero-cta">
          <Link to="/contact" className="btn btn-hero">Get Started</Link> {/* CTA Button */}
          <Link to="/contact" className="btn btn-secondary-hero">Contact Us</Link> {/* CTA Button */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
