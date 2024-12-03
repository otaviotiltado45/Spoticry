import React, { useState, useEffect } from 'react';

const ListPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [message, setMessage] = useState('');

  const fetchPlaylists = async () => {
    const token = localStorage.getItem('authToken'); // Recuperando o token JWT

    if (!token) {
      setMessage('Usuário não autenticado. Faça login primeiro.');
      return; // Retorna caso o token não esteja presente
    }

    try {
      const response = await fetch('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, // Enviando o token no cabeçalho da requisição
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar playlists');
      }

      const data = await response.json();
      setPlaylists(data); // Atualizando o estado com as playlists recebidas
    } catch (error) {
      console.error('Erro ao buscar playlists:', error);
      setMessage('Erro ao buscar playlists. Tente novamente.');
    }
  };

  useEffect(() => {
    fetchPlaylists(); // Carregar playlists ao montar o componente
  }, []);

  return (
    <div>
      <h2>Minhas Playlists</h2>
      {message && <p>{message}</p>}
      <div className="playlists-container">
        {playlists.length === 0 ? (
          <p>Não há playlists disponíveis.</p>
        ) : (
          playlists.map((playlist) => (
            <div key={playlist.id}>
              <h3>{playlist.name}</h3>
              <p>{playlist.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListPlaylists;
