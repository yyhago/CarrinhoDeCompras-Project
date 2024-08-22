// Função para criar o Item com seus parâmetros 
async function createItem(nameItem, price, quantity) {
  return {
    nameItem,
    price, 
    quantity,
    subTotal: () => price * quantity,
  }
}

export default createItem;