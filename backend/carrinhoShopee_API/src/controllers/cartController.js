let cart = []; // Armazenamento em memória para os itens do carrinho

export function addItemToCart(req, res) {
  const { nameItem, price, quantity } = req.body;

  if (!nameItem || isNaN(price) || isNaN(quantity) || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid item details' });
  }

  const existingItem = cart.find(item => item.nameItem === nameItem);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    const item = {
      nameItem,
      price,
      quantity,
      subTotal: price * quantity
    };
    cart.push(item);
  }

  res.status(201).json({ message: 'Item added successfully', item: req.body });
}

export function getCartItems(req, res) {
  res.json(cart);
}

export function getCartTotal(req, res) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  res.json({ total });
}

export const removeItemFromCart = async (req, res, next) => {
  try {
    const { nameItem } = req.params;
    const itemIndex = cart.findIndex((item) => item.nameItem === nameItem);
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      res.json({ message: 'Item removed from cart', cart });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    next(error);
  }
};
