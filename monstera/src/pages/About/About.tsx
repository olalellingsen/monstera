import React from 'react'
import './About.css'
import SpotifyPlayer from '../../components/SpotifyPlayer/SpotifyPlayer'

const About: React.FC = () => {
  return (
    <div className='about'>
      <div className="pics">
      <img src="monstera.jpg" alt="" />
      </div>
      <div className="bio">
        <p>Trumpeter and composer Ola Lømo Ellingsen has strong references to club, electronic and jazz music. With his sextet MONSTERA he presents a blend of danceable grooves, resilient melodies and cosmetic soundscapes or “Dancefloor-jazz”.</p>

      </div>
      <SpotifyPlayer />
    </div>
  )
}

export default About