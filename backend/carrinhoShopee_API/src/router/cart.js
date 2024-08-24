import express from 'express';
import { addItemToCart, getCartItems, getCartTotal, removeItemFromCart } from '../controllers/cartController.js';

const router = express.Router();

router.get('/', getCartItems); // Endpoint para buscar itens do carrinho
router.post('/add', addItemToCart); // Endpoint para adicionar itens ao carrinho
router.get('/total', getCartTotal); // Endpoint para buscar total do carrinho
router.post('/remove/:nameItem', removeItemFromCart); // Endpoint para remover itens do carrinho

export default router;
