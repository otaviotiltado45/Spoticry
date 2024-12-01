import React from 'react';

const PlaylistCard = ({ name, description }) => {
  return (
    <div className="playlist-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PlaylistCard;
