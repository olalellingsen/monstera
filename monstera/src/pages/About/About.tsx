import React from 'react'
import './About.css'
import SpotifyPlayer from '../../components/SpotifyPlayer/SpotifyPlayer'

const About: React.FC = () => {
  return (
    <div className='about'>
      <SpotifyPlayer />
    </div>
  )
}

export default About