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
    <>
      {spotifyUri && (
        <iframe
          src={`https://open.spotify.com/embed/album/${spotifyUri.split(':')[2]}`}
          width="100%"
          height="380"
        //   frameBorder="0"
          allow="encrypted-media"
        />
      )}
    </>
  );
};

export default SpotifyPlayer;
