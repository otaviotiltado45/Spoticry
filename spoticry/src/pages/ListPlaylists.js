import React, { useState, useEffect } from 'react';

const ListPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  const fetchPlaylists = async () => {
    const token = localStorage.getItem('authToken'); // Recuperar o token JWT

    try {
      const response = await fetch('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Usando o token para autenticação
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar playlists');
      }

      const data = await response.json();
      setPlaylists(data); // Atualizar o estado com as playlists
    } catch (error) {
      console.error('Erro ao buscar playlists:', error);
    }
  };

  useEffect(() => {
    fetchPlaylists(); // Chamar a função de busca ao montar o componente
  }, []);

  return (
    <div>
      <h2>Minhas Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <h3>{playlist.name}</h3>
            <p>{playlist.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPlaylists;
