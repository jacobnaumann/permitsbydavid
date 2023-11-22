// FeatureListSection.js

import React from 'react';
import './Home.css'; // Use common styles

const FeatureListSection = () => {
  const permits = [
    { name: 'Building', detail: 'Essential for new constructions, extensions, and major renovations.' },
    { name: 'Electrical', detail: 'Required for all electrical installations, repairs, and modifications.' },
    { name: 'Plumbing', detail: 'Necessary for new plumbing installations and modifications to existing systems.' },
    { name: 'Mechanical', detail: 'For installations related to HVAC systems, elevators, and other machinery.' },
    { name: 'Re-roof', detail: 'Permits for roofing work, including repairs, replacements, and new installations.' },
    { name: 'Demolition', detail: 'Required for the lawful teardown of buildings or structures.' },
    { name: 'Moving', detail: 'Permits for relocating structures from one site to another.' },
    { name: 'Landscaping', detail: 'Needed for significant changes to property landscaping, tree removal, or land alteration.' },
  ];

  

  return (
    <section className="feature-list-section">
      <h2>Types of Permits We Handle</h2>
      <div className="permit-list">
        {permits.map((permit) => (
          <div key={permit.name} className="permit-item">
            <h3>{permit.name} Permits</h3>
            <p>{permit.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureListSection;
