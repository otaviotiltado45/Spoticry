import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Login falhou');
      }

      const data = await response.json();
      // Armazenar o token JWT no localStorage ou no estado global
      localStorage.setItem('authToken', data.token);
      alert('Login bem-sucedido!');
      // Redirecionar ou fazer outras ações após o login bem-sucedido
    } catch (error) {
      setErrorMessage('Erro ao fazer login, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};

export default Login;
