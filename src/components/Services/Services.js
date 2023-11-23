// Services.js

import React from 'react';
import Footer from '../Footer/Footer';
import './Services.css';

const Services = () => {
  return (
    <div className="main-container">
      <div className="services-container">
        <h1>Our Services</h1>
        <p className="services-intro">
          Navigating the complexities of permits requires seasoned expertise, and that's where we excel. At Permits By David, we specialize in handling the intricacies of the permitting process so you don't have to. Let us do the heavy lifting, ensuring your business moves forward without unnecessary delays or expenses.
        </p>
        <div className="service">
          <h2>Building Permits</h2>
          <p>From groundbreaking new constructions to intricate remodels, our building permits encompass all aspects of residential and non-residential development. Ensure your gazebos, decks, and even house moves are compliant and secure with our expert services.</p>
        </div>

        <div className="service">
          <h2>Electrical Permits</h2>
          <p>Electrify your project with our electrical permits, covering new installations to critical fire and accident repairs. Our attention to detail guarantees safe and efficient electrical work for any structure or project.</p>
        </div>

        <div className="service">
          <h2>Plumbing Permits</h2>
          <p>Fluid efficiency in new and existing structures is our promise. Our plumbing permits cover the spectrum from installation to the latest in water-saving technology, ensuring your systems run smoothly.</p>
        </div>

        <div className="service">
          <h2>Mechanical Permits</h2>
          <p>Keep your environment perfectly tempered with our mechanical permits. We cover HVAC systems, gas piping, and more to ensure your spaces are comfortable and regulation-compliant.</p>
        </div>

        <div className="service">
          <h2>Re-roof Permits</h2>
          <p>Protect your investment from the top down. Our re-roof permits will ensure that your roofing work meets all the necessary safety and quality standards.</p>
        </div>

        <div className="service">
          <h2>Demolition Permits</h2>
          <p>Careful and compliant demolition is key to making way for progress. Our demolition permits facilitate the safe and regulated removal of existing structures.</p>
        </div>

        <div className="service">
          <h2>Moving Permits</h2>
          <p>Transition smoothly with our moving permits, ensuring your structure's journey through public thoroughfares is seamless and secure.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
