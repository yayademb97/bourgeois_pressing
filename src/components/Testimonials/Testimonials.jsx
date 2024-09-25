import React, { useRef } from 'react'
import './Testimonial.css';
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'
import user01 from '../../assets/images/user03.jpg';
import user02 from '../../assets/images/user02.jpg';
import user03 from '../../assets/images/user04.jpg';
import user04 from '../../assets/images/user05.jpg';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


  const slideFordward = () => {
      if(tx > -50){
          tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
  };


  const slideBackward = () => {
      if(tx < 0){
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`
  };



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideFordward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user01} className="user-img" />
                  <div>
                    <h3>Kadidia Coulibaly</h3>
                    <span>Habite à Siracoro</span>
                  </div>
                </div>
                <p>
                  Bourgeois Pressing est sans aucun doute le meilleur service de pressing que j'ai eu l'occasion d'utiliser. 
                  Leur attention aux détails, la qualité irréprochable de leur travail, 
                  et leur professionnalisme m'ont vraiment impressionnée. 
                  Je suis toujours émerveillée par la propreté et la fraîcheur de mes vêtements après chaque visite. 
                  Je recommande vivement leurs services à tous ceux qui recherchent l'excellence et la satisfaction garantie.
                </p>
              </div>
            </li>


            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user02} className="user-img" />
                  <div>
                    <h3>Fadima Maiga</h3>
                    <span>Habite à Faladiè</span>
                  </div>
                </div>
                <p>
                  Je suis absolument ravie des services offerts par Bourgeois Pressing. Leur équipe est toujours ponctuelle, 
                  aimable et extrêmement professionnelle. Chaque vêtement est traité avec soin et ressort impeccablement propre. 
                  Leurs services de haute qualité dépassent mes attentes à chaque fois, 
                  et je me sens privilégiée de pouvoir compter sur eux pour un service aussi exceptionnel. 
                  Je les recommande sans hésitation à tous ceux qui cherchent un pressing de confiance et de qualité.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user03} className="user-img" />
                  <div>
                    <h3>Mamadou Sissoko</h3>
                    <span>Habite à Magnambougou</span>
                  </div>
                </div>
                <p>
                  Je suis extrêmement satisfait des services offerts par Bourgeois Pressing. 
                  Leur équipe est non seulement professionnelle, 
                  mais également attentionnée et dévouée à la satisfaction de leurs clients. 
                  Chaque visite est une expérience agréable, 
                  et je suis toujours impressionné par la propreté et le soin apporté à mes vêtements. 
                  Leur service est rapide et fiable, ce qui me permet de récupérer mes affaires en parfait état et dans les délais. 
                  Je recommande Bourgeois Pressing à tous ceux qui recherchent une qualité de service exceptionnelle et une attention aux détails sans pareil.
                </p>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user04} className="user-img" />
                  <div>
                    <h3>Ousmane Diarra</h3>
                    <span>Habite à Kalaban</span>
                  </div>
                </div>
                <p>
                  En tant que client régulier de Bourgeois Pressing, je ne peux que louer la qualité de leurs services. 
                  Leur équipe est toujours accueillante et professionnelle, 
                  et ils prennent grand soin de chaque vêtement que je leur confie. 
                  J'apprécie particulièrement leur souci du détail et leur engagement à offrir un service de premier ordre. 
                  Grâce à eux, mes vêtements sont toujours impeccables et prêts à être portés. 
                  Je recommande vivement Bourgeois Pressing à tous ceux qui recherchent un service fiable et de haute qualité.
                </p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials