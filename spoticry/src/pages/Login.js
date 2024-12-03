import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate para navegação

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Usando useNavigate

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
      // Armazenando o token no localStoragej
      localStorage.setItem('authToken', data.token);
      const token = localStorage.getItem("authToken");
  if (token) {
    console.log("Token encontrado:", token);
} else {
    console.log("Token não encontrado no Local Storage.");
}
      console.log(token);
      // Redirecionando para a página Home após o login
      navigate('/home');
    } catch (error) {
      setMessage('Erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
