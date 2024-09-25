import React from 'react';
import './Gallerie.css';
import gallerieImg from '../../assets/images/image_pressing05.webp'
import gallerieImg2 from '../../assets/images/image_pressing02.jpg'
import gallerieImg3 from '../../assets/images/image_pressing03.jpg'
import gallerieImg4 from '../../assets/images/image_pressing04.jpg'
import white_arrow from '../../assets/images/white-arrow.png'

const Gallerie = () => {
  return (
    <div className='gallerie'>
        <div className="gallery">
            <img src={gallerieImg} className="" />
            <img src={gallerieImg2} className="" />
            <img src={gallerieImg4} className="" />
            <img src={gallerieImg3} className="" />
        </div>
        <button className='btn dark-btn'>Voir plus ici <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Gallerie