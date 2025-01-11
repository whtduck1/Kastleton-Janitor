import React, { useState } from 'react';
import '../styles/header.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu state:', isMenuOpen); // Debugowanie
  };

  return (
    <header>
      <div className="header-container">
        <div className="title-container">
          <h1>Kastleton Janitor</h1>
          <p>your guild discord organizer</p>
        </div>
        <div className="navigation-container">
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={isMenuOpen ? 'open' : ''}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
