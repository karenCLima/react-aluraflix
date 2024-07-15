# react-aluraflix
Projeto Aluraflix -  Oracle (ONE) + Alura: Criar um projeto em React de um site responsivo que cria, edita, deleta e mostra vídeos.

## Funcionalidades

- Mostrar lista de videos divididos por categoria.
- Criar novos cards de vídeo
- Editar um card de vídeo
- Deletar video da lista.

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- Node.js
- npm (Node Package Manager)

## Tecnologias Utilizadas
- React  
- Vite  
- Styled-Components
- React-icons
- Json-Server

## Como Baixar e Rodar o Projeto

1. Clone o repositório:

   ```
   git clone https://github.com/karenCLima/react-aluraflix.git
   cd react-aluraflix
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Inicie o servidor JSON fake:

   Certifique-se de que você tenha o `json-server` instalado globalmente ou localmente como uma dependência de desenvolvimento.

   ```
   npm install json-server
   json-server --watch src/json/db.json
   ```

4. Inicie a aplicação:
   ```
   npm run dev
   ```
5. Explorando a aplicação:
   - Acesse a aplicação no seu navegador através do endereço fornecido pelo servidor local (`http://localhost:5173`, por exemplo).
   - Você poderá visualizar, criar, editar e deletar videos na interface.
