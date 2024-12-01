import React from 'react';

const DeletePlaylist = ({ playlistId }) => {
  const handleDelete = async () => {
    const token = localStorage.getItem('authToken'); // Recuperar o token

    try {
      const response = await fetch(`https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/playlist/${playlistId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir playlist');
      }

      alert('Playlist excluída com sucesso!');
      // Redirecionar ou atualizar a lista de playlists após a exclusão
    } catch (error) {
      console.error('Erro ao excluir playlist:', error);
      alert('Erro ao excluir playlist.');
    }
  };

  return <button onClick={handleDelete}>Excluir Playlist</button>;
};

export default DeletePlaylist;
