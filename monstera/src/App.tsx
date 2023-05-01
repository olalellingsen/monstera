import React from 'react';
import AlbumCover from './components/AlbumCover'
import SpotifyPlayer from './components/SpotifyPlayer'

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AlbumCover imageUrl='cover.png' />
      <SpotifyPlayer albumName="monstera" />
    </div>
  );
};

export default App;
