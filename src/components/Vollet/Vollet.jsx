import React, { useState } from 'react';
import './Vollet.scss'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


function Vollet({projet, mission, title, annéé, techno, images, link}) {

    const [isOpen, setIsOpen] = useState(false) // useState est un hook de gestion d'état dans React Il est utilisé pour ajouter la gestion de l'état à un composant fonctionnel

    return(
        <div className="collapse" >
            <div className='collapse-toggle' onClick={() => setIsOpen(!isOpen)} >
                <h3>Projet N°{projet} : {title}</h3>
                <div className='collapse-img'>
                {isOpen ? <FaArrowUp/> : <FaArrowDown/> }
                </div>   
            </div>
            {isOpen && //cette condition permet d'afficher la description de la collapse seulement si c'est true
            <div className='collapse-content' >
                <h2>{title}</h2>
                <p>Date : {annéé}</p>
                <p>Mission : {mission}</p>
                <p>Technologie utilisés : {techno}</p>
                <p>Quelques captures du projet :</p>
                <div className="img-container">
                    {images.map((image, index) => (
                    <img key={index} src={image} alt="" />
                    ))}
                </div>
                <hr />
                <div className='link-container'>
                    <a href={link}>Voir le projet</a> 
                </div>
            </div>}
        </div>
    )
}

export default Vollet