import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate para navegação
import PlaylistCard from '../components/PlaylistCard';

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Usando useNavigate

  useEffect(() => {
    // Verifique se o token JWT está presente
    const token = localStorage.getItem('authToken');
    if (!token) {
      // Redireciona para a página de login se não houver token
      navigate('/login');
    } else {
      fetchPlaylists(); // Se o token estiver presente, buscar as playlists
    }
  }, [navigate]); // Adicionar navigate nas dependências

  const fetchPlaylists = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar playlists');
      }

      const data = await response.json();
      setPlaylists(data); // Atualizando o estado com as playlists
    } catch (error) {
      setMessage('Erro ao buscar playlists. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Minhas Playlists</h2>
      {message && <p>{message}</p>}
      <div>
        {playlists.length === 0 ? (
          <p>Não há playlists disponíveis.</p>
        ) : (
          playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
