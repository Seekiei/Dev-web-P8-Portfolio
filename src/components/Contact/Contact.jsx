import React from 'react'
import './Contact.scss'
import linkedin from '../../assets/logo/LinkedIn_logo.png'
import mail from '../../assets/logo/Mail_(Apple)_logo.png'
import logo from '../../assets/logo/undraw_mailbox_re_dvds (1).svg'

function Contact() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:gharab.mourad.contact@gmail.com';
      };

    const handleLinkedinClick = () => (
        window.location.href = 'https://linkedin.com/in/mourad-gharab-015961255'
    );

  return (
    <div className='main-contact' id='Contact'>
        <div className="contact-container">
            <div className='container-titre'>
                <h2>CONTACTEZ-MOI</h2>
            </div>
            <h4>Je suis disponible sur presque tous les réseaux sociaux. Vous pouvez m'envoyer un message, <br/> je vous répondrai dans les 24 heures.</h4>
            <div className='link-part'>
                <div className="flex-link">
                    <img src={mail} alt="logo-mail" onClick={handleEmailClick}/>
                    <img src={linkedin} alt="logo-linkedin" onClick={handleLinkedinClick} />
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