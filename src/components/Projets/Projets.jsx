import React from 'react'
import Vollet from '../Vollet/Vollet'
import './Projets.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

import projet6kasa from "../../assets/Projets/projet6kasa.webp";
import projet7monvieuxgrimoire from "../../assets/Projets/projet7monvieuxgrimoire.webp";
import projet5ninacarducci from "../../assets/Projets/projet5ninacarducci.webp";
import projet3sophiebluel from "../../assets/Projets/Projet3sophiebluel.webp";
import projet4qwenta from "../../assets/Projets/projet4qwenta.webp";
import projet2booki from "../../assets/Projets/projet2booki.webp";

import sophiebluel1 from "../../assets/Projets/sophie-1.webp"
import sophiebluel2 from "../../assets/Projets/sophie-2.webp"
import nina1 from "../../assets/Projets/nina-1.webp"
import nina2 from "../../assets/Projets/nina-2.webp"
import booki2 from "../../assets/Projets/booki-1.webp"
import booki1 from "../../assets/Projets/booki-2.webp"
import grimoire1 from "../../assets/Projets/grimoire-1.webp"
import grimoire2 from "../../assets/Projets/grimoire-2.webp"
import kasa1 from "../../assets/Projets/kasa-1.webp"
import kasa2 from "../../assets/Projets/kasa-2.webp"
import qwenta1 from "../../assets/Projets/qwenta1.webp"
import qwenta2 from "../../assets/Projets/qwenta2.webp"

function Modal() {
    
    const [modal, setModal] = useState(false);
    const [selectedProjets, setSelectedProjets] = useState(null);
  
    const toggleModal = (index) => {
      setModal(!modal);
      setSelectedProjets(index);
    };

  const projets = [
    {
        "projet": "Booki",
        "title": "Créez la page web d'une agence de voyage avec HTML & CSS",
        "annéé": " Décembre-Janvier 2023",
        "Mission" : [
            "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix,",
            " vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS. Respect du rendu visuel du projet en versions mobile, tablette et desktop. "
        ],

        "problématiques" : "Garantir que la page est accessible à tous les utilisateurs, format mobiles et tablettes (Responsive)",

        "Techno" : [
            "Html", 
            "Css"
        ],
        "imageDeCouverture" : projet2booki,
        "images": 
           [booki1,booki2],
        "linkCode" : "https://seekiei.github.io/Dev-web-P2-Booki/"
    },

    {
        "projet": "Sophie Bluel",
        "title": "Créez une page web dynamique avec Javascript",
        "annéé": " Fevrier 2023",

        "Mission" : [
            "Développement d'une page web dynamique avec JavaScript,",
            " mise en place d'une page d'authentification pour l'administrateur du site,",
            " ajout de boutons pour trier les médias et implémentation d'une modale permettant d'en uploader des nouveaux,",
            " récupération des données via des appels à l'API."],
        
        "problématiques" : "Gérer les erreurs provenant de l'API lors de la suppression d'images, en cas d'échec de la requête",   

        "Techno" : [
            "Javascript",
            "Html", 
            "Css"
        ],
        
        "imageDeCouverture" : projet3sophiebluel,
        "images": [sophiebluel1, sophiebluel2 ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P3-Sophie-Bluel"
    },

    {
        "projet": "Qwenta",
        "title": "Planifiez le développement du site de votre client",
        "annéé": "Mars 2023",
        "Mission" : [
            "Planification du développement du site du client Qwenta,",
            " veille technologiques afin de déterminer les outils les plus adaptés aux besoin du client,",
            " présentation de l'outil de gestion de projet avec le déroulé précis du projet,",
            "travail en collaboration avec le client avec la mise en place d'un plan de communication.",
        ],

        "problématiques" : "Pas de problématiques rencontrées",

        "Techno" : [
            'Jira'
        ],
        "imageDeCouverture" : projet4qwenta,
        "images": [ qwenta1, qwenta2
        ],
    },

    {
        "projet": "Nina Carducci",
        "title": "Débuggez et optimisez un site de photographe",
        "annéé": "Avril 2023",
        "Mission" : [
            "Débugguer et optimiser du site web du client,",
            " ajout des données afin d'ameliorer le réferencement local,",
            " rédaction d'un rapport d'intervention détaillant un avant/après des performances en se basant sur des audit Lighthouse, la liste des modifications et une liste des cas d'usage du site.",],

        "problématiques" : "L'optimisations des images, ainsi que la mimification des scripts javaScript et Css",

        "Techno" : [
                "JQuery",
                "Html", 
                "Css"
            ],
        "imageDeCouverture" : projet5ninacarducci,
        "images": [
            nina1,nina2
        ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P5-Nina-Carducci"
    },

    {
        "projet": "Kasa",
        "title": "Créez une application web de location immobilière avec React",
        "annéé": "Mai 2023",
        "Mission" : [
            "Développement d'une application web de location immobilière avec React,",
            " création complète du site et des différentes pages avec react-router,",
            " ajout de composant React réutilisable et dynamique avec pour certains une gestion des data,",
            " présentation du projet au CTO en justifiant et défendant les décisions techniques."],

        "problématiques" : "Gérer la récupération et la manipulation des données liées aux annonces immobilières, telles que les détails des propriétés, les images, les caractéristiques, etc. , et React Router pour gérer la navigation entre les différentes pages de l'application", 

        "Techno" : [
            "React",
            "Html", 
            "Sass"
        ],
        "imageDeCouverture" : projet6kasa,
        "images": [
            kasa1,kasa2
        ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P6-Kasa"
    },

    {
        "projet": "Mon Vieux Grimoire",
        "title": "Développez le back-end d'un site de notaion de livres",
        "annéé": "Juin 2023",
        "Mission" : [ 
            "Développement du back-end d'un site de notation de livres,",
            " mise en place de la structure du code (contrôleurs, routeurs, etc.),",
            " sécurisation de la base de données et optimisation des images,",
            " création d'un système d'authentification à mail unique.", ],

        "problématiques" : " Implémentation d'un mécanisme permettant d'afficher la note globale sur 5 étoiles pour chaque livre. et ce dernier est calculée en fonction des évaluations données par les autres clients ",

        "Techno" : [
            "Node.Js",
            "Express.Js", 
            "MongoDB",
        ],
        "imageDeCouverture" : projet7monvieuxgrimoire,
        "images": [
            grimoire1,grimoire2
        ],
        "linkCode" : "https://github.com/Seekiei/Dev-web-P7-Mon-Vieux-Grimoire"
    }
  ];

  return (
    <>
        <section className='main-projets' id='Mes-Projets'>
            <div className='container-titre'>
                <h2>PROJETS RÉALISÉS</h2>
            </div>
            <div className='projets-grid'>
            {projets.map((projet, index) => (
                <div className='img-projet-container' key={index} onClick={() => toggleModal(projet)}>
                <motion.div className='vvv' whileHover={{ scale: 0.98 }} transition={{ duration: 0.3 }} >
                    <img src={projet.imageDeCouverture} alt="Imags De Projet" />
                </motion.div>
                <Vollet projet={projet.projet} title={projet.title} annéé={projet.annéé} mission={projet.Mission} problematiques={projet.problématiques} techno={projet.Techno} images={projet.images} link={projet.linkCode} />
                </div> 
            ))}
        </div>

        </section>

        
        {modal && (
            <div className='modal' onClick={toggleModal}>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='modal-backdrop' />
                <motion.div className='modal-content-wrapper' >
                    <motion.div initial={{x: 100, opacity: 0}} animate={{x:0, opacity: 1, transition:{delay: 0.1, duration: 0.1}}} exit={{x: 100, opacity: 0}}  className="modal-content">
                        <h2>{selectedProjets.title}</h2>
                        <p><strong>Date :</strong> {selectedProjets.annéé}</p>
                        <p><strong>Mission :</strong> {selectedProjets.Mission}</p>
                        <p><strong>Les problématiques rencontrées :</strong> {selectedProjets.problématiques}</p>
                        <ul className='techno'>
                            <p><strong>Compétences :</strong></p>
                            {selectedProjets.Techno.map((techno, index) => (
                                <li  key={index}>{techno}</li>    
                            ))}
                        </ul>
                        <p><strong>Quelques aperçus du projet :</strong></p>
                        <div className='img-container'>
                            {selectedProjets.images.map((image, index) => (
                                <img key={index} src={image} alt="images-apercus" />
                            ))}
                        </div>
                        <div className='link-container'>
                            <a href={selectedProjets["linkCode"]}>Voir le code</a> 
                        </div>
                        <FontAwesomeIcon icon={faXmark} style={{color: "#1b1526",}} className="close-modal" onClick={toggleModal} />
                    </motion.div>
                </motion.div>
            </div>
        )}
    </>
  )
}

export default Modal