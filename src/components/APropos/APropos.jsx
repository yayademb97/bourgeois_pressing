import React from 'react'
import './APropos.css';
import program_img from '../../assets/images/pressing_img2.webp'
import about_img from '../../assets/images/jouer.png';

const APropos = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={program_img} className="program-img" />
            <img src={about_img} className="play-icon" onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>À Propos de notre Pressing</h3>
            <h2>Préserver l'élégance de vos vêtements pour demain</h2>
            <p>
                Chez BourgeoisPressing, nous traitons vos vêtements avec soin pour préserver leur élégance et prolonger leur durée de vie, 
                en utilisant des technologies de nettoyage avancées. 
                Nous nous engageons à garantir un nettoyage en profondeur tout en respectant les fibres et les couleurs.
            </p>
            <p> 
                Grâce à notre application web, vous pouvez facilement planifier des ramassages, 
                suivre vos commandes en temps réel et recevoir des conseils d'entretien personnalisés, le tout avec un service de qualité supérieure. 
                Faites confiance à notre expertise pour prendre soin de vos vêtements les plus précieux.
            </p>
            <p>
                Redécouvrez la sensation de vêtements fraîchement nettoyés, prêts à être portés.
            </p>
        </div>
    </div>
  )
}

export default APropos