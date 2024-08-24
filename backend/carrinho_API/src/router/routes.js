import express from 'express'
import * as cartService from '../services/cart.js'
import createItem from '../services/itens.js'
import { validateAddItem } from '../middlewares/validation.js'


const router = express.Router()
const myCart = [] // Carrinho de compras



// Endpoint para adicionar itens ao carrinho
router.post('/cart/add', validateAddItem, async (req,res,next) => {
  try {
    const { nameItem, price, quantity } = req.body
    const item = await createItem(nameItem, price, quantity)
    await cartService.addItem(myCart, item)
    res.status(201).json({ message: 'Item added to cart!', cart: myCart })
  } catch (error) {
    next(error) // Passa o erro para o middleware de tratamento de erros
  }
})

// Endpoint para remover o item do carrinho
router.post('/cart/remove/:nameItem', async (req, res, next) => {
  try {
    const { nameItem } = req.params; // Obtém o nome do item dos parâmetros da URL
    const itemIndex = myCart.findIndex((item) => item.nameItem === nameItem);
    if (itemIndex !== -1) {
      myCart.splice(itemIndex, 1); // Remove o item do carrinho
      res.json({ message: 'Item removed from cart', cart: myCart });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    next(error); // Passa o erro para o middleware de tratamento de erros
  }
});


// Endpoint para exibir os itens do carrinho
router.get('/cart', async (req,res) => {
  await cartService.displayCart(myCart)
  res.json(myCart)
})

// Endpoint para calcular o total do carrinho
router.get('/cart/total', async (req, res,next) => {
  try {
    const total = await cartService.calculatedTotal(myCart);
    res.json({ total });
  } catch (error) {
    next(error); // Passa o erro para o middleware de tratamento de erros
  }
});




export default router;