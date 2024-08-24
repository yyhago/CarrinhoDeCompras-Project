// Middleware para validar as adições no carrinho
function validateAddItem(req,res, next) {
  const { nameItem, price, quantity } = req.body

  if(!nameItem || typeof nameItem !== 'string'){
    return res.status(400).json({ error: 'The item name is required and must be a string.' });
  }

  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'The price must be a positive number.' });
  }

  if (!Number.isInteger(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'The quantity must be a positive integer.' });
  }

  next()

}

export { validateAddItem }