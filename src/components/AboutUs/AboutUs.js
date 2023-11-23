// AboutUs.js

import React from 'react';
import Footer from '../Footer/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="main-container">
      <div className="about-us-container">
        <h1>About Permits By David</h1>
        <section className="founder-section">
          <h2>Meet David Naumann</h2>
          <p>David was born in Cleveland, Ohio in 1948 and has been a cornerstone in the building and designing industry for over 30 years. With a rich history in Central Florida, Permits By David, LLC has been facilitating project success for 6 years and counting.</p>
        </section>

        <section className="history-section">
          <h2>Our Journey</h2>
          <p>Starting from a single desk in his home office, David has grown Permits By David into a leading permit service provider, with a focus on integrity, efficiency, and customer satisfaction.</p>
        </section>

        <section className="team-section">
          <h2>The Team</h2>
          <p>Behind the success of Permits By David is a dedicated team of four sons, each bringing unique skills to the table, ensuring that every client's needs are met with precision and care.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;