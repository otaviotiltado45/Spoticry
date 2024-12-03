import React from 'react';

const PlaylistCard = ({ playlist }) => {
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken'); // Recuperando o token JWT

    try {
      const response = await fetch(`https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlist.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir playlist');
      }

      alert('Playlist excluída com sucesso!');
      // Atualizar a lista de playlists após a exclusão
      // Pode ser necessário chamar uma função para atualizar a lista de playlists
    } catch (error) {
      console.error('Erro ao excluir playlist:', error);
      alert('Erro ao excluir playlist.');
    }
  };

  return (
    <div className="playlist-card">
      <h3>{playlist.name}</h3>
      <p>{playlist.description}</p>
      <button onClick={handleDelete}>Excluir Playlist</button> {/* Botão de exclusão */}
    </div>
  );
};

export default PlaylistCard;
