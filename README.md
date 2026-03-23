# CRUD com PostgreSQL e Node.js

Este é um projeto de exemplo que demonstra uma aplicação web simples para gerenciamento de usuários (CRUD - Create, Read, Update, Delete), utilizando Node.js no back-end e PostgreSQL como banco de dados.

## 🚀 Funcionalidades

- **Listar Usuários:** Exibe uma tabela com todos os usuários cadastrados.
- **Cadastrar Usuário:** Permite adicionar novos usuários informando nome e e-mail.
- **Excluir Usuário:** Permite remover um usuário existente do banco de dados.
- **Feedback Visual:** Mensagens de sucesso, erro ou carregamento são exibidas na interface.

## 🛠️ Tecnologias Utilizadas

- **Back-end:**
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/) (Framework web)
  - [pg](https://node-postgres.com/) (Cliente PostgreSQL para Node.js - implícito pelo uso do banco)
  - [dotenv](https://www.npmjs.com/package/dotenv) (Gerenciamento de variáveis de ambiente)
- **Front-end:**
  - HTML5 & CSS3
  - JavaScript (Vanilla)
- **Banco de Dados:**
  - [PostgreSQL](https://www.postgresql.org/)

## 📂 Estrutura de Pastas

A estrutura básica do projeto é organizada da seguinte forma:

```text
crud-with-postgresql/
├── node_modules/       # Dependências do projeto
├── public/             # Arquivos estáticos do front-end
│   ├── assets/
│   │   ├── css/        # Estilos
│   │   └── js/         # Lógica do front-end (main.js)
│   └── index.html      # Página principal
├── src/                # Código fonte do servidor
│   └── database/       # Configuração e queries do banco
├── .env                # Variáveis de ambiente (não comitado)
├── .gitignore          # Arquivos ignorados pelo Git
├── server.js           # Ponto de entrada do servidor (Back-end)
├── package.json        # Configurações do projeto e dependências
└── README.md           # Documentação do projeto
```

## 🐘 Configurando o Banco de Dados (PostgreSQL)

Antes de rodar a aplicação, você precisa criar o banco de dados e a tabela necessária.

1.  Acesse seu cliente PostgreSQL (pgAdmin, DBeaver ou terminal `psql`).
2.  Crie um banco de dados (ex: `crud_db`).
3.  Execute o seguinte script SQL para criar a tabela de usuários:

```sql
CREATE TABLE users (
  id_user INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

## ⚙️ Instalação e Configuração

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/crud-with-postgresql.git
    cd crud-with-postgresql
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e preencha com as credenciais do seu banco de dados:

    ```ini
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=crud_db
    PORT=3003
    ```

4.  **Execute a aplicação:**

    ```bash
    npm start
    # ou
    node ./src/server
    ```

5.  **Acesse no navegador:**
    Abra `http://localhost:3003` (ou a porta definida no seu `.env`).
