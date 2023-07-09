import React from 'react'
import './Contact.scss'
import logo from "../../assets/devices.svg"
import linkedin from '../../assets/logo/linkedin-2.webp'
import mail from '../../assets/logo/Mail_(Apple)_logo.png'

function Contact() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:gharab.mourad.contact@gmail.com';
      };

    const handleLinkedinClick = () => (
        window.location.href = 'https://linkedin.com/in/mourad-gharab-015961255'
    );

  return (
    <div className='main-contact' id='Contact'>
        <div className='container-titre'>
            <h2>CONTACTEZ-MOI</h2>
        </div>
        <div className="contact-container">
            <div className='mail-part'>
                <h3>Me contacter par Mail</h3>
                <div className="flex-mail">
                    <img src={mail} alt="logo-mail" />
                    <button onClick={handleEmailClick}>Mon Mail</button>
                </div>
            </div>
            <div className="linkedin-part">
                <h3>Me contacter sur Linkedin</h3>
                <div className="flex-linkedin">
                    <img src={linkedin} alt="logo-linkedin" />
                    <button onClick={handleLinkedinClick}>Mon Linkedin</button>
                </div>
            </div>
        </div>
        
        <div className='side-logo'>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Contact