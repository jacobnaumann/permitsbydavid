// FeatureListSection.js

import React from 'react';
import './Home.css'; // Use common styles
import buildingIcon from '../../assets/permit-icon-building.png';
import electricalIcon from '../../assets/permit-icon-electrical.png';
import plumbingIcon from '../../assets/permit-icon-plumbing.png';
import mechanicalIcon from '../../assets/permit-icon-mechanical.png';
import reroofIcon from '../../assets/permit-icon-reroof.png';
import demolitionIcon from '../../assets/permit-icon-demolition.png';
import movingIcon from '../../assets/permit-icon-moving.png';
import landscapingIcon from '../../assets/permit-icon-landscaping.png';


const FeatureListSection = () => {
  const permits = [
    { name: 'Building', detail: 'Essential for new constructions, extensions, and major renovations.', icon: buildingIcon },
    { name: 'Electrical', detail: 'Required for all electrical installations, repairs, and modifications.', icon: electricalIcon },
    { name: 'Plumbing', detail: 'Necessary for new plumbing installations and modifications to existing systems.', icon: plumbingIcon },
    { name: 'Mechanical', detail: 'For installations related to HVAC systems, elevators, and other machinery.', icon: mechanicalIcon },
    { name: 'Re-roof', detail: 'Permits for roofing work, including repairs, replacements, and new installations.', icon: reroofIcon },
    { name: 'Demolition', detail: 'Required for the lawful teardown of buildings or structures.', icon: demolitionIcon },
    { name: 'Moving', detail: 'Permits for relocating structures from one site to another.', icon: movingIcon },
    { name: 'Landscaping', detail: 'Needed for significant changes to property landscaping, tree removal, or land alteration.', icon: landscapingIcon },
  ];



  return (
    <section className="feature-list-section">
      <h2>Types of Permits We Handle</h2>
      <div className="permit-list">
        {permits.map((permit) => (
          <div key={permit.name} className="permit-item">
            <div>
              <div className="permit-title-line">
              <img src={permit.icon} alt={`${permit.name} permit icon`} className="permit-icon" />
              <h3>{permit.name} Permits</h3>
              </div>
              <p>{permit.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureListSection;
