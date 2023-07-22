import React, { useState } from 'react';
import './Vollet.scss'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"


function Vollet({projet, mission, problematiques, title, annéé, techno, images, link}) {

    const [isOpen, setIsOpen] = useState(false) // useState est un hook de gestion d'état dans React Il est utilisé pour ajouter la gestion de l'état à un composant fonctionnel

    return(
        <motion.div className="collapse"  >
            <motion.div className='collapse-toggle' onClick={() => setIsOpen(!isOpen)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} >
                <h3>{projet}</h3>
                <div className='collapse-img'>
                {isOpen ? <FaArrowUp/> : <FaArrowDown/> }
                </div>   
            </motion.div>
            <AnimatePresence>
                {isOpen && //cette condition permet d'afficher la description de la collapse seulement si c'est true
                <motion.div className='collapse-content' initial={{y: 100, opacity: 0}} animate={{y:0, opacity: 1, transition:{delay: 0.3, duration: 0.3}}} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <h2>{title}</h2>
                    <p><strong>Date :</strong> {annéé}</p>
                    <p><strong>Mission : </strong>{mission}</p>
                    <p><strong>Problématiques rencontrées : </strong>{problematiques}</p>
                    <ul className='techno'>
                            {techno.map((technos, index) => (
                                <li key={index}>{technos}</li>    
                            ))}
                        </ul>
                    <p> <strong>Quelques captures du projet :</strong></p>
                    <div className="img-container">
                        {images.map((image, index) => (
                        <img key={index} src={image} alt="" />
                        ))}
                    </div>
                    <div className='link-container'>
                        <a href={link}>Voir le code</a> 
                    </div>
                </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}

export default Vollet