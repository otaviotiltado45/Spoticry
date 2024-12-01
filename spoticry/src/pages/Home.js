import React from 'react';
import PlaylistCard from '../components/PlaylistCard';

const Home = () => {
  const playlists = [
    { name: 'Pop Hits', description: 'Melhores hits pop de 2024' },
    { name: 'Rock Classics', description: 'Os maiores clássicos do rock' },
  ];

  return (
    <div>
      <header>
        <h1>Spoticry</h1>
      </header>

      <div className="container">
        <h2>Playlists</h2>
        {playlists.map((playlist, index) => (
          <PlaylistCard key={index} {...playlist} />
        ))}
      </div>

      <footer>
        <p>&copy; 2024 Spoticry. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
