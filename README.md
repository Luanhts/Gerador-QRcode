
# Gerador de QR Code

Este é um projeto que gera QR Codes a partir de uma URL fornecida. O projeto é composto por duas partes principais:

- **Frontend**: Criado com React e Vite.
- **Backend**: Criado com Node.js e Express para gerar o QR Code.

![image](https://github.com/user-attachments/assets/9d27f3f5-7e2f-4c75-bdae-b221bd7e673e)

## Como rodar o projeto

Este projeto utiliza dois servidores: um para o frontend (Vite) e outro para o backend (Node.js com Express). Ambos precisam ser iniciados separadamente, mas ambos serão necessários para que o sistema funcione corretamente.

### Passo 1: Clonar o repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/Luanhts/Gerador-QRcode.git
cd Gerador-QRcode.git
```

### Passo 2: Rodar o Backend (Express)

1. Navegue até o diretório do backend:

   ```bash
   cd Gerador-QRcode.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor Express:

   ```bash
   node index.js
   ```

   O servidor backend estará rodando em `http://localhost:5000`.

### Passo 3: Rodar o Frontend (Vite)

1. Abra um novo terminal e navegue até o diretório do frontend:

   ```bash
   cd qrgenerator
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do Vite:

   ```bash
   npm run dev
   ```

   O servidor frontend estará rodando em `http://localhost:3000`.

### Passo 4: Comunicação entre o Frontend e o Backend

O frontend (Vite) fará requisições HTTP para o backend (Express). Se ambos os servidores estiverem rodando corretamente, você poderá acessar o site em `http://localhost:3000`, onde poderá inserir uma URL para gerar o QR Code.

### Passo 5: Testar o Sistema

1. No navegador, acesse `http://localhost:3000`.
2. Digite uma URL válida e clique no botão **Gerar QR Code**.
3. O QR Code gerado será exibido na tela.

### Problemas Comuns

- **CORS (Cross-Origin Resource Sharing)**: Se você encontrar um erro de CORS, certifique-se de que o backend esteja configurado corretamente para permitir requisições de outros domínios. No backend, adicione o middleware `cors` para habilitar o compartilhamento de recursos.

   No seu arquivo `index.js` (backend):

   ```javascript
   import express from 'express';
   import cors from 'cors';  // Adicionando cors

   const app = express();
   app.use(cors());  // Habilita CORS para todas as requisições

   // Resto do código...
   ```

- **Verificação de portas**: Certifique-se de que as portas `5000` (backend) e `3000` (frontend) estão livres e não há outros processos usando essas portas.

---

## Tecnologias Utilizadas

- **Frontend**: React, Vite
- **Backend**: Node.js, Express, `qr-image`
- **Outros**: CORS (para permitir requisições entre o frontend e o backend)

---

Se você tiver alguma dúvida ou encontrar um erro, fique à vontade para abrir uma issue no repositório!
