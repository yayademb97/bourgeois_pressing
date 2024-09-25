import React from 'react';
import './Hero.css';
import DarkArrow from '../../assets/images/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Dédiés à fournir un service de pressing de qualité pour des vêtements soignés à Bamako</h1>
            <p>Votre satisfaction est notre priorité. 
                Nous prenons soin de chaque vêtement pour qu'il soit impeccable et prêt à vous accompagner dans votre quotidien. 
                Découvrez notre engagement envers la qualité et la propreté.
            </p>
            <button className='btn'>
                Découvrez-en plus
                <img src={DarkArrow} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Hero