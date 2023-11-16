// Home.js
import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from '../common/FeatureSection';
import FeatureListSection from '../common/FeatureListSection';
import TestimonialsSection from '../common/TestimonialsSection';
import CallToAction from '../common/CallToActionSection'; 
import FAQSection from '../common/FAQSection';
import Footer from '../common/Footer';

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
