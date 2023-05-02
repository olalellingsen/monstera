import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';


const SpotifyPlayer: React.FC = () => {

  return (
    <div className="spotifyPlayer">
      <iframe
      src="https://open.spotify.com/embed/album/5a1tmom7nDFlkpfMT6u2V0?utm_source=generator&theme=0" 
      width="90%" height="560" frameBorder="0" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
      </iframe>
    </div>

  );
};

export default SpotifyPlayer;
