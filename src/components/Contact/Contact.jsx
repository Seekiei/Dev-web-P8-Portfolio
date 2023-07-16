import React from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'

import linkedin from '../../assets/logo/LinkedIn_logo.png'
import mail from '../../assets/logo/Mail_(Apple)_logo.png'
import logo from '../../assets/logo/undraw_mailbox_re_dvds (1).svg'

function Contact() {

    const openInNewTab = (url) => (
        window.open(url, '_blank', 'noreferrer')
    )

  return (
    <section className='main-contact' id='Contact'>
        <div className="contact-container">
            <div className='container-titre'>
                <h2>CONTACTEZ-MOI</h2>
            </div>
            <h3>Je suis présent sur la plupart des plateformes de réseau sociaux.<br />N'hésitez pas à m'envoyer un message et je vous répondrai dans les 24 heures.</h3>
            <div className='link-part'>
                <div className="flex-link">
                    <Link role='link' onClick={() => openInNewTab('mailto:gharab.mourad.contact@gmail.com')}>
                        <img src={mail} alt="logo-mail"/>
                    </Link>
                    <Link role='link' onClick={() => openInNewTab('https://linkedin.com/in/mourad-gharab-015961255')}>
                        <img src={linkedin} alt="logo-linkedin"  />
                    </Link>
                    
                </div>
            </div>
        </div>
        <div className='side-logo'>
            <img src={logo} alt="logo" />
        </div>
    </section>
  )
}

export default Contact