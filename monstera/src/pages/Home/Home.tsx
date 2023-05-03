import React from 'react'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className='home'>
      {/* <div className="icons">
        <a href="">
          <img src="insta-icon.png" alt="" height={40}/>
        </a>
      </div> */}
      <p>our debut album "monstera" is out now!</p>
       <a className='cover' href="https://orcd.co/album-monstera">
        <img src="cover-min.png" alt="Album cover" />
      </a>
    </div>
  )
}

export default Home
