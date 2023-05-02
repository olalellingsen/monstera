import React from 'react'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <p>our debut album "monstera" is out now!</p>
       <a className='cover' href="https://orcd.co/album-monstera">
        <img src="cover.png" alt="Album cover" />
      </a>
    </div>
  )
}

export default Home
