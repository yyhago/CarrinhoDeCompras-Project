import express from 'express'
import * as cartService from '../services/cart.js'
import createItem from '../services/itens.js'


const router = express.Router()
const myCart = [] // Carrinho de compras






// Endpoint para adicionar itens ao carrinho
router.post('/cart/add', async (req,res) => {
  const { nameItem, price, quantity } = req.body
  const item = await createItem(nameItem, price, quantity)
  await cartService.addItem(myCart, item)
  res.status(201).json({ message: 'Item added to cart!', cart: myCart })
})

// Endpoint para remover o item do carrinho
router.post('/cart/remove', async (req,res) => {
  const { nameItem } = req.body
  const item = myCart.find((item) => item.nameItem === nameItem)
  if(item){
    await cartService.removeItem(myCart, item);
    res.json({ message: 'Item removed from cart', cart: myCart })
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
})


// Endpoint para exibir os itens do carrinho
router.get('/cart', async (req,res) => {
  await cartService.displayCart(myCart)
  res.json(myCart)
})

// Endpoint para calcular o total do carrinho
router.get('/cart/total', async (req, res) => {
  const total = await cartService.calculatedTotal(myCart);
  res.json({ total });
});




export default router;