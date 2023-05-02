import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

interface Props {
  albumName: string;
}

const SpotifyPlayer: React.FC<Props> = ({ albumName }) => {
  const [spotifyUri, setSpotifyUri] = useState<string | null>(null);

  useEffect(() => {
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.searchAlbums(albumName).then((data) => {
      const album = data.albums.items[0];
      setSpotifyUri(album.uri);
    });
  }, [albumName]);

  return (
    <div className="spotifyPlayer">
      <iframe
      src="https://open.spotify.com/embed/album/5a1tmom7nDFlkpfMT6u2V0?utm_source=generator&theme=0" 
      width="100%" height="600" frameBorder="0" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
      </iframe>
    </div>

  );
};

export default SpotifyPlayer;
