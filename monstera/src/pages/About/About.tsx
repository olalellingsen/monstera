import React from 'react'
import './About.css'
import SpotifyPlayer from '../../components/SpotifyPlayer/SpotifyPlayer'


const About: React.FC = () => {
  return (
    <div className='about'>

      <div className="left-container">
        <img src="monstera.jpg" alt="" />
        <SpotifyPlayer />
       
      </div>

      <div className="right-container">
        <div className="bio">
         <p>Trumpeter and composer Ola Lømo Ellingsen has strong references to club, electronic and jazz music. With his sextet MONSTERA he presents a blend of danceable grooves, resilient melodies and cosmetic soundscapes or “Dancefloor-jazz”.</p>
         <p>The debut album "monstera" was released on Fjordgata Records on April 28th. </p>
        </div>
        <img src="band.jpg" alt="" />
      </div>
    </div>
  )
}

export default About