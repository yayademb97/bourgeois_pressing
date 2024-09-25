import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import APropos from './components/APropos/APropos'
import Gallerie from './components/Gellerie/Gallerie'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

    const [playState, setPlayState] = useState(false);


  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subtitle='Nos Services' title="Qu'est-ce que nous offrons?" />
        <Services />
        <APropos setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title="Consulter nos galleries" />
        <Gallerie />
        <Title subtitle="TÉMOIGNAGES" title="Ce que nos clients disent"/>
        <Testimonials />
        <Title subtitle="Contactez-nous" title="Prenez contact"/>
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App