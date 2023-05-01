import React from 'react';

interface Props {
  imageUrl: string;
}

const AlbumCover: React.FC<Props> = ({ imageUrl }) => {
  return (
    <div className="albumCover">
        <img src={imageUrl} alt="Album cover" style={{ width: '100%', maxWidth: '500px' }} />
    </div>
  );
};

export default AlbumCover;
