# Carrinho de Compras com Node.js

Este é um projeto de um **Carrinho de Compras** desenvolvido com **Node.js** e uma interface frontend em **HTML, CSS e JavaScript** puro. O objetivo deste projeto é permitir que usuários possam adicionar produtos ao carrinho, especificando a quantidade desejada e o valor de cada produto. A aplicação calcula automaticamente o subtotal de cada item e oferece a funcionalidade de remover produtos individualmente do carrinho.

## Screenshots

![FRONTEND](/pictureScreen/image.png)
![BACKEND](/pictureScreen/image2.png)


## Funcionalidades

- **Adição de Produtos:** O usuário pode adicionar produtos ao carrinho informando o nome, quantidade e valor unitário.
- **Cálculo de Subtotal:** A aplicação calcula automaticamente o subtotal de cada produto com base na quantidade e no valor unitário.
- **Remoção de Produtos:** Cada produto pode ser removido individualmente do carrinho.
- **Integração com API:** As informações do carrinho são enviadas para uma API backend que faz as devidas verificações usando middlewares e armazena os dados.
- **Verificação com Middlewares:** A API realiza validações para garantir que todos os dados sejam válidos antes de armazená-los.
- **Interface Visual:** A aplicação possui uma interface simples e funcional, desenvolvida com HTML, CSS e JavaScript puro.
- **Persistência dos Dados:** Os dados são armazenados no backend, garantindo que as informações do carrinho de compras sejam mantidas entre sessões e possam ser recuperadas posteriormente.

## Comandos Principais da API

A seguir, estão os principais comandos utilizados na API para o gerenciamento do carrinho de compras:

```javascript
import express from 'express';
import { addItemToCart, getCartItems, getCartTotal, removeItemFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCartItems); // Endpoint para buscar itens do carrinho
router.post('/add', addItemToCart); // Endpoint para adicionar itens ao carrinho
router.get('/total', getCartTotal); // Endpoint para buscar total do carrinho
router.post('/remove/:nameItem', removeItemFromCart); // Endpoint para remover itens do carrinho

export default router;
```

### Descrição dos Endpoints

- `GET /` - Busca todos os itens do carrinho.
- `POST /add` - Adiciona um novo item ao carrinho.
- `GET /total` - Retorna o valor total do carrinho.
- `POST /remove/:nameItem` - Remove um item específico do carrinho com base no nome.

## Tecnologias Utilizadas

### Backend:
- **Node.js**: Plataforma utilizada para construir a API backend.
- **Express**: Framework utilizado para a criação de rotas e gerenciamento de middleware.
- **Nodemon**: Ferramenta para monitoramento de alterações no código durante o desenvolvimento.
- **CORS**: Middleware utilizado para permitir requisições de diferentes origens à API.
- **Body-parser**: Middleware para parsing do corpo das requisições, facilitando o acesso aos dados enviados pelo frontend.

### Frontend:
- **HTML**: Linguagem de marcação utilizada para estruturar a interface.
- **CSS**: Utilizado para estilizar a interface e torná-la mais amigável.
- **JavaScript**: Linguagem utilizada para adicionar interatividade à interface, como cálculo de subtotais e remoção de produtos.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/yyhago/CarrinhoDeCompras-Project
   ```

2. Instale as dependências do Node.js:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```
   Ou, se estiver utilizando o Nodemon:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação:
   Abra o arquivo `index.html` no seu navegador para visualizar a interface do carrinho de compras.

5. Testando a API:
   Utilize ferramentas como Postman ou Insomnia para enviar requisições à API e verificar as respostas.

## Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias e correções.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.