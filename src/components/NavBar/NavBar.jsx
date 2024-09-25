import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css';
import LogoApp from '../../assets/images/logo_app.png';
import menu_icon from '../../assets/images/menu-icon.png';

const NavBar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', ()=> {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={LogoApp} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li>
              <Link to='hero' smooth={true} offset={0} duration={500}>Accueil</Link>
            </li>
            <li>
              <Link to='services' smooth={true} offset={-280} duration={500}>Services</Link>
              </li>
            <li>
              <Link to='about' smooth={true} offset={-150} duration={500}>À Propos de nous</Link>
            </li>
            <li>
              <Link to='gallerie' smooth={true} offset={-280} duration={500}>Gallérie</Link>
            </li>
            <li>
              <Link to='testimonials' smooth={true} offset={-280} duration={500}>Avis</Link>
            </li>
            <li>
              <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contactez-nous</Link>
            </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar