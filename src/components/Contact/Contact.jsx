import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'

import white_arrow from '../../assets/images/white-arrow.png';


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2288d727-8d62-4050-b46f-92ba32845293");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Envoyez-nous un message
                <img src={msg_icon} alt="" />
            </h3>
            <p>N'hésitez pas à nous contacter via le formulaire de contact ou à trouver 
                nos informations de contact ci-dessous. 
                Vos questions, feedbacks et suggestions sont importants pour nous 
                alors que nous nous efforçons de fournir un service exceptionnel à notre service de pressing
            </p>
            <ul>
                <li>
                    <img src={mail_icon} alt="" />
                    bourgeoispressing@gmail.com
                </li>
                <li>
                    <img src={phone_icon} alt="" />
                    (+223) 67-99-94-28
                </li>
                <li>
                    <img src={location_icon} alt="" />
                    Siracoro , Non loin du post de l'EDM
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Votre Nom:</label>
                <input type="text" name="name" placeholder="Entrez votre nom complet" required/>

                <label>Votre Numéro de Téléphone:</label>
                <input type="tel" name="phone" placeholder="Entrez votre numéro de téléphone" required/>

                <label>Ecrivez votre message içi</label>
                <textarea name="message" rows="6" placeholder="Entrez votre message..." required></textarea>

                <button type='submit' className='btn dark-btn'>Soumettre maintenant
                    <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact