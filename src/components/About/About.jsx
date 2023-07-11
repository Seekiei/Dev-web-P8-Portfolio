import React from 'react'
import "./About.scss"
import github from "../../assets/logo/github.svg";
import linkedin from "../../assets/logo/linkedin.png";

export default function About() {
  return (
        <div className="container-about" id='About'>
            <section className='a-propos'>
                <div className='container'>
                    <h2>PRESENTATION </h2>
                    <p>
                    En tant que développeur web full stack, je suis passionné par la création d'applications web dynamiques et innovantes. Diplômé en développement web, je possède une expertise en JavaScript et React, des technologies qui alimentent les expériences interactives modernes. Maîtrisant les langages fondamentaux tels que HTML, CSS et JavaScript, je suis également compétent dans l'utilisation des frameworks tels que React, Node.js et Express.js pour construire des applications robustes et efficaces. J'ai également travaillé avec des bases de données NoSQL telles que MongoDB en utilisant le framework Mongoose pour optimiser la gestion des données. De plus, j'ai acquis une solide connaissance de la méthodologie Agile SCRUM, qui me permet de collaborer efficacement au sein d'équipes de développement.
                    </p>
                </div>
                <div className='logo-profils'>
                    <a href="https://github.com/Seekiei"><img src={github} alt="Github" /></a>
                    <a href="https://linkedin.com/in/mourad-gharab-015961255"><img src={linkedin} alt="Linkedin" /></a>
                </div>
            </section>
        </div>
  )
}
