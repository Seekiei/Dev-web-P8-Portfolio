import React from 'react'
import './main.scss'
import gear5 from "../../assets/logo/gear5.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

function Main() {

    

  return (
    <section className="banner">
      <div className='banner-presentation'>
        <div className="container-img">
          <motion.img src={gear5} alt='pdp' initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}/>  
        </div>
        <motion.h1 initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>Bonjour, Je suis GHARAB Mourad. Developpeur Web FullStack, Web Designer</motion.h1>
      </div>
      <motion.div className='container-scrolldown' initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }}>
        <p>Voir mes projets</p>
        <Link 
        to="Mes-Projets"
        smooth={true}
        duration={500} // Durée de défilement en millisecondes
        offset={-50} // Décalage par rapport à l'élément cible
        className="smooth-scroll">
        <FontAwesomeIcon icon={faArrowDown} style={{color: "#EAD1A0",}} />
        </Link>
        </motion.div>
    </section>
  )
}

export default Main



