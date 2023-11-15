//Home.js

import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import FeatureListSection from './FeatureListSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <FeatureListSection />
      {/* Future sections will be added here */}
    </div>
  );
};

export default Home;
