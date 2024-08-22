// Importações
import createItem from "./services/itens.js";
import * as cartService from './services/cart.js'

const myCart = [] 
const myWishList = []

console.log("\nWelcome to your shopee checkout!")

// Itens pré setados
const item1 = await createItem("Mouse", 29.99, 3)
const item2 = await createItem("Teclado", 299.00, 5)
const item3 = await createItem("Monitor", 9.99, 4)

// Adicionando item as minhas variáveis (myCart)
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myWishList, item3)


// Removendo os itens
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item2)


// Mostra minha lista de itens no meu carrinho disponiveis
await cartService.displayCart(myCart)

// Deletando os elementos do meu carrinho
// await cartService.deleteItem(myCart, item1.nameItem)
// await cartService.deleteItem(myCart, item3.nameItem)

// Mostrando o total do carrinho
await cartService.calculatedTotal(myCart)
