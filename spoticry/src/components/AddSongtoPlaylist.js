import React, { useState } from 'react';

const AddSongToPlaylist = ({ playlistId }) => {
  const [songId, setSongId] = useState('');

  const handleAddSong = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('authToken'); // Recuperando o token

      const response = await fetch(`https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}/song`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ songId }),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar música');
      }

      alert('Música adicionada à playlist com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar música:', error);
      alert('Erro ao adicionar música à playlist.');
    }
  };

  return (
    <form onSubmit={handleAddSong}>
      <input
        type="text"
        placeholder="ID da música"
        value={songId}
        onChange={(e) => setSongId(e.target.value)}
      />
      <button type="submit">Adicionar Música</button>
    </form>
  );
};

export default AddSongToPlaylist;
