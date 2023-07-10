import './Navbar.css';
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  
  // function pour le scroll direct vers la categorie demandé 

  const handleClick = (event) => {
    event.preventDefault();
    const { href } = event.target;
    const sectionId = href.substring(href.indexOf('#'));
    const targetElement = document.querySelector(sectionId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <div className='container-navbar'>
      <nav className="navbar">
        <Link to="/"><img className='logo-nav' src={logo} alt="Logo" /></Link>
        <ul>
          <li>
            <a href="#About" onClick={handleClick}>
              A Propos
            </a>
          </li>
          <li>
            <a href="#Mes-Projets" onClick={handleClick}>
              Mes Projets
            </a>
          </li>
          <li>
            <a href="#Technologie" onClick={handleClick} >
              Technologie
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
    
  );
}

export default Navbar;
