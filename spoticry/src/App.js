import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePlaylist from './pages/CreatePlaylist';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-playlist" element={<CreatePlaylist />} />
        {/* Adicione outras rotas conforme necessário */}
      </Routes>
    </Router>
  );
};

export default App;
