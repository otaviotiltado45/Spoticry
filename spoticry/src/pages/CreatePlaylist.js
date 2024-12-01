import React, { useState } from 'react';

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistDescription, setPlaylistDescription] = useState('');

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();

    const playlistData = { name: playlistName, description: playlistDescription };

    try {
      const token = localStorage.getItem('authToken'); 

      const response = await fetch('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify(playlistData),
      });

      if (!response.ok) {
        throw new Error('Falha ao criar playlist');
      }

      const data = await response.json();
      alert('Playlist criada com sucesso!');
    } catch (error) {
      console.error('Erro ao criar playlist:', error);
      alert('Erro ao criar playlist. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleCreatePlaylist}>
      <input
        type="text"
        placeholder="Nome da Playlist"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da Playlist"
        value={playlistDescription}
        onChange={(e) => setPlaylistDescription(e.target.value)}
      />
      <button type="submit">Criar Playlist</button>
    </form>
  );
};

export default CreatePlaylist;
