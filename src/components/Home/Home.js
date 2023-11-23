// Home.js
import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import FeatureListSection from './FeatureListSection';
import TestimonialsSection from '../Common/TestimonialsSection';
import CallToAction from '../Common/CallToActionSection';
import FAQSection from '../Common/FAQSection';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <FeatureListSection />
      <TestimonialsSection />
      <CallToAction />
      <FAQSection />
      <Footer />
      {/* Future sections will be added here */}
    </div>
  );
};

export default Home;
