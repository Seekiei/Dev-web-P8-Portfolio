import React from 'react'
import './Footer.scss'
import github from "../../assets/logo/github.svg";
import linkedin from "../../assets/logo/linkedin.png";

function Footer() {
  return (
    <div className='container-footer'>
        <div className="footer-logo">
            <a href="linkedin.com/in/mourad-gharab-015961255">
              <img src={linkedin} alt="logo linkedin" />  
            </a>
            <a href="https://github.com/Seekiei">
              <img src={github} alt="logo github" /> 
            </a>
        </div>
        <div className="container-text">
            <h3>
            Réalisez par Mourad Gharab
            </h3>
        </div>
    </div>
  )
}

export default Footer