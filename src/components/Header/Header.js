//Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png'; // Update the path to the new logo
import './Header.css';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/">
        <img src={logoImage} alt="Permits By David Logo" />
        </Link>
      </div>
      <button className="nav-toggle" onClick={() => setIsNavVisible(!isNavVisible)}>
        ☰
      </button>
      {/* Add 'visible' class when isNavVisible is true */}
      <nav className={isNavVisible ? 'visible' : ''}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
