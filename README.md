
# Spoticry 🎵

**Spoticry** é uma aplicação desenvolvida em React para gerenciamento de playlists de música. Este projeto foca em funcionalidades modernas, como integração com APIs, gerenciamento de estado e renderização dinâmica.

---

## 📋 Funcionalidades

- **Login e autenticação** de usuários.
- **Criação, visualização e edição** de playlists.
- Adição e remoção de músicas nas playlists.
- Pesquisa e filtro de músicas e playlists.
- Navegação intuitiva com React Router.

---

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **Axios**: Para requisições HTTP à API.
- **React Router**: Gerenciamento de rotas.
- **Styled-Components**: Estilização baseada em componentes.
- **Node.js**: Ambiente para execução do servidor.
- **Postman**: Ferramenta para teste e documentação de APIs.

---

## 📂 Estrutura do Projeto

```plaintext
Spoticry/
│
├── public/            # Arquivos estáticos
├── src/               # Código fonte principal
│   ├── components/    # Componentes React
│   ├── services/      # Serviços e chamadas de API
│   ├── styles/        # Estilos globais e temas
│   ├── App.js         # Componente principal
│   ├── index.js       # Ponto de entrada
│
├── .gitignore         # Arquivos ignorados pelo Git
├── package.json       # Configurações e dependências
├── README.md          # Documentação do projeto
└── ...
```

---

## 🛠️ Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/usuario/Spoticry.git
   ```
2. **Instale as dependências:**
   ```bash
   cd Spoticry
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
4. **Abra no navegador:**
   - Acesse `http://localhost:3000`.

---

## 🔧 Exemplos de Código

### Renderização de Listas com `map`

```javascript
const items = data.map((item, index) => <Item key={index} data={item} />);
return <div>{items}</div>;
```

### Chamada de API com `axios`

```javascript
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/data');
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};
```

### Navegação com React Router

```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
<button onClick={() => navigate('/home')}>Go Home</button>;
```

### Renderização Condicional

```javascript
return <p>{isLoading ? "Carregando..." : "Dados carregados"}</p>;
```

---

## 🔑 Endpoints da API

### Usuários

- **Login:** `POST /api/users/login`

### Playlists

- **Criar Playlist:** `POST /api/playlists`
- **Buscar Playlist por ID:** `GET /api/playlists/:id`

### Músicas

- **Adicionar Música:** `POST /api/songs`

Para mais detalhes, veja a [[documentação completa da API](https://documenter.getpostman.com/view/20306176/2s9YJc23Ap)](#).


---

**Desenvolvido por [Otávio Barros,Samuel Carlos de Souza]** 🚀
