import React from 'react'
import './Technologie.scss'
import { motion } from 'framer-motion'

import react from '../../assets/langages-framework/react.svg'
import js from '../../assets/langages-framework/logo-javascript.svg'
import html from '../../assets/langages-framework/html-1.svg'
import css from '../../assets/langages-framework/css.svg'
import nodejs from '../../assets/langages-framework/nodejs.svg'
import mongodb from '../../assets/langages-framework/mongodb.png'
import bootstrap from '../../assets/langages-framework/bootstrap.webp'
import swagger from '../../assets/langages-framework/Swagger.png'
import postman from "../../assets/langages-framework/postman.png"
import sass from "../../assets/langages-framework/sass.png"
import express from "../../assets/langages-framework/express.png"

import figma from '../../assets/langages-framework/figma.png'
import photoshop from '../../assets/langages-framework/photoshop.svg'

import git from '../../assets/langages-framework/git.svg'
import npm from '../../assets/langages-framework/Npm.png'
import webpack from '../../assets/langages-framework/webpack.svg'

export default function Technologie() {

    const technoImg = [
        react,
        js,
        html,
        css,
        sass,
        bootstrap,
        nodejs,
        express,
        mongodb,
      ];

      const designImg = [
        photoshop,
        figma
      ];

      const outilsImg = [
        git,
        npm,
        swagger,
        postman,
        webpack
      ]


  return (
    <section className='main-techno' id='Technologie'>
        <div className='container-titre'>
            <h2>
                TECHNOLOGIE
            </h2>
        </div>

        <div className='grid'>
            <div className='dev-part'>
                <div className='dev-container'>
                    <h3>Web Développement</h3>
                    <h4>Développement d'applications web Front-end, Backend-end</h4>
                    <p>Langages utilisés</p>
                    <div className='container-logos'>
                    {technoImg.map((image, index) => (
                        <motion.img whileHover={{ scale: 0.8 }} transition={{ duration: 0.3 }} key={index} src={image} alt="logo" />
                     ))}
                    </div>
                </div>
            </div>

            <div className='design-part'>
                <div className='design-container'>
                    <h3>Web Design</h3>
                    <h4>Création de maquettes de sites web, création de logos</h4>
                    <p>Logiciels utilisés</p>
                    <div className='container-logos'>
                        {designImg.map((image, index) => (
                            <motion.img whileHover={{ scale: 0.8 }} transition={{ duration: 0.3 }} key={index} src={image} alt="logo" />
                        ))}
                    </div>
                </div>
            </div>

            <div className='outils-part'>
                <div className='outils-container'>
                    <h3>Outils de Développement</h3>
                    <h4>Facilite la création d'application web et mobile</h4>
                    <p>Outils utilisés</p>
                    <div className='container-logos'>
                        {outilsImg.map((image, index) => (
                            <motion.img whileHover={{ scale: 0.8 }} transition={{ duration: 0.3 }} key={index} src={image} alt="logo" />
                        ))}
                    </div>
                </div>
            </div>
                
            
        </div>
    </section>
  )
}
