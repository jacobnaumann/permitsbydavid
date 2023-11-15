//FeatureListSection.js

import React from 'react';
import '../../common.css'; // Use common styles

const FeatureListSection = () => {
  const permits = [
    { name: 'Building', detail: 'Essential for new constructions and renovations.' },
    { name: 'Electrical', detail: 'Required for all electrical installations and modifications.' },
    // Add more permits here
  ];

  return (
    <section className="feature-list-section">
      <h2>Types of Permits We Handle</h2>
      <ul>
        {permits.map((permit) => (
          <li key={permit.name}>
            <h3>{permit.name} Permits</h3>
            <p>{permit.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureListSection;
