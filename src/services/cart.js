// Função para adicionar um item novo
async function addItem(userCart, item){
  
  const indexFound = userCart.findIndex((p) => p.nameItem === item.nameItem)

  if(indexFound !== -1){
    // Se o item já existe no carrinho, apenas incrementa a quantidade e atualiza o subtotal
    userCart[indexFound].quantity += item.quantity;
    userCart[indexFound].subTotal = () => userCart[indexFound].price * userCart[indexFound].quantity
  } else{
    // Caso não exista, adicione no carrinho
    userCart.push(item)
  }


}

// Função para calcular o total do carrinho
async function calculatedTotal(userCart){
  console.log("\nYour shopee checkout total is: ")
  const result = userCart.reduce((total, item) => total + item.subTotal(), 0)
  console.log(`Total: ${result}\n`)
}

// Função que remove um item por inteiro
async function removeItem(userCart, item){

  // Encontrando indice do item
  const indexFound = userCart.findIndex((p) => p.nameItem === item.nameItem)

  // Caso não encontre o item
  if(indexFound === -1){
    console.log("Item não encontrado")
    return
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    userCart[indexFound].subTotal = () => userCart[indexFound].price * userCart[indexFound].quantity;
  } else {
    userCart.splice(indexFound, 1);
  }

}

// Função para deletar um item (-1)
async function deleteItem(userCart, nameItem){
  const index = userCart.findIndex((item) => item.nameItem === nameItem)

  // Caso ele ache o nameItem ele corta e tira da lista.
  if(index !== -1){
    userCart.splice(index, 1)
  }

}

// Função para mostrar a lista de itens disponiveis no vetor
async function displayCart(userCart){
  console.log("\n Shopee Cart List: ")

  // Laço para se repetir a cada item que for encontrado no vetor
  userCart.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.nameItem} - R$ ${item.price} | ${
      item.quantity
    }x | SubTotal: ${item.subTotal()}`)
  })

}

export {
  addItem,
  calculatedTotal,
  removeItem,
  deleteItem,
  displayCart
}