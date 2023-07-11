import React from 'react'
import Vollet from '../Vollet/Vollet'
import './Projets.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import projet6kasa from "../../assets/Projets/projet6kasa.jpg";
import projet7monvieuxgrimoire from "../../assets/Projets/projet7monvieuxgrimoire.jpg";
import projet5ninacarducci from "../../assets/Projets/projet5ninacarducci.jpg";
import projet3sophiebluel from "../../assets/Projets/Projet3sophiebluel.png";
import projet4qwenta from "../../assets/Projets/projet4qwenta.jpg";
import projet2booki from "../../assets/Projets/projet2booki.png";

import sophiebluel1 from "../../assets/Projets/sophie-1.png"
import sophiebluel2 from "../../assets/Projets/sophie-2.png"
import nina1 from "../../assets/Projets/nina-1.png"
import nina2 from "../../assets/Projets/nina-2.png"
import booki2 from "../../assets/Projets/booki-1.png"
import booki1 from "../../assets/Projets/booki-2.png"
import grimoire1 from "../../assets/Projets/grimoire-1.png"
import grimoire2 from "../../assets/Projets/grimoire-2.png"
import kasa1 from "../../assets/Projets/kasa-1.png"
import kasa2 from "../../assets/Projets/kasa-2.png"
import qwenta1 from "../../assets/Projets/qwenta1.png"
import qwenta2 from "../../assets/Projets/qwenta2.png"

function Modal() {
    
    const [modal, setModal] = useState(false);
    const [selectedProjets, setSelectedProjets] = useState(null);
  
    const toggleModal = (image) => {
      setModal(!modal);
      setSelectedProjets(image);
    };

  

  const projets = [
    {
        "projet": "1",
        "title": "Créez la page web d'une agence de voyage avec HTML & CSS",
        "annéé": " Décembre-Janvier 2023",
        "Mission" : [
            "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.",
            "Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS. Pour cela, vous travaillez en étroite collaboration avec Sarah, la CTO, et Loïc, l’UI designer. "
        ],
        "Techno" : "HTML, CSS",
        "imageDeCouverture" : projet2booki,
        "images": 
           [booki1,booki2],
        "linkCode" : "https://seekiei.github.io/Dev-web-P2-Booki/"
    },

    {
        "projet": "2",
        "title": "Créez une page web dynamique avec Javascript",
        "annéé": " Fevrier 2023",

        "Mission" : ["Développement d'une page web dynamique avec JavaScript.",
        "Mise en place d'une page d'authentification pour l'administrateur du site.",
        "Ajout de boutons pour trier les médias et implémentation d'une modale permettant d'en uploader des nouveaux.",
        "Récupération des données via des appels à l'API."],

        "Techno" : "JAVASCRIPT HTML CSS",
        "imageDeCouverture" : projet3sophiebluel,
        "images": [sophiebluel1, sophiebluel2 ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P3-Sophie-Bluel"
    },

    {
        "projet": "3",
        "title": "Planifiez le développement du site de votre client",
        "annéé": "Mars 2023",
        "Mission" : ["Qwenta, un de vos clients, souhaite faire développer un “Menu Maker”. Il s’agit d’un site permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics.",
        "C’est l’occasion pour vous de mettre en place une méthodologie de travail agile."
        ],
        "Techno" : "(Gestion de projet)",
        "imageDeCouverture" : projet4qwenta,
        "images": [ qwenta1, qwenta2
        ],
    },

    {
        "projet": "4",
        "title": "Débuggez et optimisez un site de photographe",
        "annéé": "Avril 2023",
        "Mission" : "Vous êtes développeur freelance, et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. Pour ce faire, vous avez analysé plusieurs sites internet. Parmi vos prospects, il y a le site de Nina Carducci, une photographe dont vous a parlé l’un de vos amis.",
        "Techno" : "JQUERY HTML CSS",
        "imageDeCouverture" : projet5ninacarducci,
        "images": [
            nina1,nina2
        ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P5-Nina-Carducci"
    },

    {
        "projet": "5",
        "title": "Créez une application web de location immobilière avec React",
        "annéé": "Mai 2023",
        "Mission" : "Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.",
        "Techno" : "REACT HTML CSS",
        "imageDeCouverture" : projet6kasa,
        "images": [
            kasa1,kasa2
        ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P6-Kasa"
    },

    {
        "projet": "6",
        "title": "Développez le back-end d'un site de notaion de livres",
        "annéé": "Juin 2023",
        "Mission" : [ "Vous êtes développeur back-end en freelance depuis maintenant un an dans la région de Lille. Vous avez l’habitude de travailler avec Kévin, un développeur front-end plus expérimenté que vous, et qui a déjà un bon réseau de contacts dans le milieu.", "Kévin vous contacte pour vous proposer de travailler avec lui en mutualisant vos compétences front / back sur un tout nouveau projet qui lui a été proposé. Il s’agit d’une petite chaîne de librairies qui souhaite ouvrir un site de référencement et de notation de livres" ],
        "Techno" : "NODE.JS EXPRESS.JS MONGODB MONGOOSE",
        "imageDeCouverture" : projet7monvieuxgrimoire,
        "images": [
            grimoire1,grimoire2
        ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P7-Mon-Vieux-Grimoire"
    }
  ];

  return (
    <>
        <div className='main-projets' id='Mes-Projets'>
            <div className='container-titre'>
                <h2>MES PROJETS</h2>
            </div>
            <div className='projets-grid'>
            {projets.map((projet, index) => (
                <div className='img-projet-container' key={index} onClick={() => toggleModal(projet)}>
                   <img src={projet.imageDeCouverture} alt="Imags De Projet" />
                    <Vollet projet={projet.projet} title={projet.title} annéé={projet.annéé} mission={projet.Mission} techno={projet.Techno} images={projet.images} link={projet.linkCode} />
                </div> 
            ))}
        </div>

        </div>

        
        {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2>{selectedProjets.title}</h2>
                    <p><strong>Date :</strong> {selectedProjets.annéé}</p>
                    <p><strong>Mission :</strong> {selectedProjets.Mission}</p>
                    <p><strong>Technologies utilisés :</strong> {selectedProjets.Techno}</p>
                    <p><strong>Quelques aperçus du projet :</strong></p>
                    <div className='img-container'>
                        {selectedProjets.images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </div>
                    <hr />
                    <div className='link-container'>
                        <a href={selectedProjets["linkCode"]}>Voir le projet</a> 
                    </div>
                    <FontAwesomeIcon icon={faXmark} style={{color: "#EAD1A0",}} className="close-modal" onClick={toggleModal} />
                </div>
        </div>
        )}
    </>
  )
}

export default Modal


