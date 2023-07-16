import React from 'react'
import "./About.scss"
import github from "../../assets/logo/github.svg";
import linkedin from "../../assets/logo/linkedin.svg";
import svg from "../../assets/logo/undraw_programming_re_kg9v.svg"
import { motion } from 'framer-motion';

export default function About() {

    const openInNewTab = (url) => (
        window.open(url, '_blank', 'noreferrer')
    )

  return (
            <motion.section id='About' className='a-propos' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} >                    
                <div className='container'>
                    <div className='text-side'>
                        <h2>About Me</h2>
                        <p>
                        En tant que développeur web passionné et expérimenté, je suis constamment enthousiasmé par l'opportunité de créer des sites web innovants et captivants. Mon objectif principal est de développer des solutions durables et évolutives, en intégrant des fonctionnalités sociales et techniques, afin de générer un impact significatif.
                        </p> 
                        <div className='logo-profils'>
                            <span className="background">
                                <span className="social-media-buttons">
                                        <span className="social-media-button" onClick={() => openInNewTab('https://github.com/Seekiei')}>
                                            <img
                                                alt="Github"
                                                src={github}
                                            />
                                        </span>
                                        <span className="social-media-button" onClick={() => openInNewTab('https://linkedin.com/in/mourad-gharab-015961255')}>
                                            <img
                                                alt="LinkedIn"
                                                src={linkedin}
                                            /> 
                                        </span>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className='image-side'>
                      <img src={svg} alt="svg" />  
                    </div>
                </div>
            </motion.section>
  )
}
