import React from 'react'
import './Footer.scss'
import github from "../../assets/logo/github.svg";
import linkedin from "../../assets/logo/linkedin.png";
import { Link } from 'react-router-dom';

function Footer() {

  const openInNewTab = (url) => (
    window.open(url, '_blank', 'noreferrer')
)

  return (
    <footer className='container-footer'>
        <div className="footer-logo">
            <Link role='link' onClick={() => openInNewTab('https://linkedin.com/in/mourad-gharab-015961255')}>
              <img src={linkedin} alt="logo linkedin" />  
            </Link>
            <Link role='link' onClick={() => openInNewTab('https://github.com/Seekiei')}>
              <img src={github} alt="logo github" /> 
            </Link>
        </div>
        <div className="container-text">
            <h3>
            © 2023 Copyright, Made by GHARAB Mourad
            </h3>
        </div>
    </footer>
  )
}

export default Footer