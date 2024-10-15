
# API Geradora de QR Code

Este projeto implementa uma API RESTful para a criação e manipulação de QR Codes. A API é construída para receber dados de entrada (como URLs, textos, etc.) e devolver a imagem do QR Code correspondente, facilitando a integração em aplicações que requerem geração dinâmica de QR Codes.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construir a API.
- **QRCode**: Biblioteca para a geração de QR Codes.
- **Jest**: Ferramenta para testes unitários e de integração.
- **Swagger**: Documentação e interface para interagir com a API.

## Endpoints da API

### Geração de QR Code

- **URL**: `/api/qrcode`
- **Método**: `POST`
- **Descrição**: Gera um QR Code a partir de uma string fornecida.
- **Parâmetros**:
  - `text` (string, obrigatório): Dados que serão codificados no QR Code.
  - `size` (número, opcional): Tamanho do QR Code em pixels. Valor padrão: 250.
  - `format` (string, opcional): Formato de saída, podendo ser `png`, `jpeg` ou `svg`. Valor padrão: `png`.
- **Exemplo de Requisição**:
  ```json
  {
    "text": "https://seusite.com",
    "size": 300,
    "format": "png"
  }
