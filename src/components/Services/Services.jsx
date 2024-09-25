import React from 'react';
import './Services.css';
import ServiceImg from '../../assets/images/service-img.png'
import ServiceImg1 from '../../assets/images/service-suspendu.png'
import ServiceImg2 from '../../assets/images/pressage-des-vetements.png'
import ServiceImg3 from '../../assets/images/vetements.png'
import ServiceImg4 from '../../assets/images/livraison-img1.png'


import ServiceImgIcon from '../../assets/images/machine-a-laver.png';
import ServiceImgIcon1 from '../../assets/images/sechage.png';
import ServiceImgIcon2 from '../../assets/images/planche-a-repasser.png';
import ServiceImgIcon3 from '../../assets/images/vetements-propres.png';
import ServiceImgIcon4 from '../../assets/images/voiture-de-livraison.png';

const Services = () => {
  return (
    <div className='services'>
        <div className="service">
            <img src={ServiceImg} alt="" />
            <div className="caption">
                <img src={ServiceImgIcon} alt="" />
                <p>Néttoyage</p>
            </div>
        </div>

        <div className="service">
            <img src={ServiceImg1} alt="" />
            <div className="caption">
                <img src={ServiceImgIcon1} alt="" />
                <p>Séchage</p>
            </div>
        </div>

        <div className="service">
            <img src={ServiceImg2} alt="" />
            <div className="caption">
                <img src={ServiceImgIcon2} alt="" />
                <p>Repassage</p>
            </div>
        </div>

        <div className="service">
            <img src={ServiceImg3} alt="" />
            <div className="caption">
                <img src={ServiceImgIcon3} alt="" />
                <p>Emballage</p>
            </div>
        </div>

        <div className="service">
            <img src={ServiceImg4} alt="" />
            <div className="caption">
                <img src={ServiceImgIcon4} alt="" />
                <p>Livraison</p>
            </div>
        </div>

    </div>
  )
}

export default Services