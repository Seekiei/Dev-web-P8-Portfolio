import React from 'react'
import './main.scss'
import gear5 from "../../assets/logo/gear5.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Main() {
  return (
    <div>
        <section className='main-container'>
            <div>
                <div className='container-presentation'>
                    <div className='container-img'>
                        <img className='pdp' src={gear5} alt="Avatar Mourad Gharab" />
                    </div>
                    <h1>Bonjour, Je suis GHARAB Mourad <br/> Developpeur Web FullStack, <br/> Web Designer</h1>
                </div>
                <div className='container-scrolldown'>
                    <p>Voir mes projets</p>
                    <FontAwesomeIcon icon={faArrowDown} style={{color: "#EAD1A0",}} />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Main