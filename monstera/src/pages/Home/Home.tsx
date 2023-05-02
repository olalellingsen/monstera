import React from 'react'
import SpotifyPlayer from '../../components/SpotifyPlayer/SpotifyPlayer'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className='home'>
       <a className='cover' href="https://orcd.co/album-monstera">
        <img src="cover.png" alt="Album cover" />
      </a>
    </div>
  )
}

export default Home
