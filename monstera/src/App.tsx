import React from 'react';
import SpotifyPlayer from './components/SpotifyPlayer'
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
        <div className="albumCover">
          <a href="https://orcd.co/album-monstera"><img src="cover.png" alt="Album cover" /></a>
      </div>
      <SpotifyPlayer albumName="monstera" />
      <Footer/>
    </div>
  );
};

export default App;
