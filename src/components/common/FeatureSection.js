import React from 'react';
import { Link } from 'react-router-dom';
import '../../common.css'; // Use common styles

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2>Why Expertise Matters in Permitting</h2>
      <p>
        Navigating the complexities of Central Florida's permitting process requires
        an expert touch. Whether it's understanding local regulations, submitting the
        right documentation, or ensuring timely approval, our experience ensures
        a smooth experience.
      </p>
      <Link to="/contact" className="btn btn-feature">Contact Us</Link> {/* CTA Button */}
    </section>
  );
};

export default FeatureSection;
