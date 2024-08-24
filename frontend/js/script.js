document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetch-items');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalDiv = document.getElementById('cart-total');
  const addItemButton = document.getElementById('add-item');
  const itemNameInput = document.getElementById('item-name');
  const itemPriceInput = document.getElementById('item-price');
  const itemQuantityInput = document.getElementById('item-quantity');
  const cartContent = document.getElementById('cart-content');
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');

  function showNotification(message, isWarning = false) {
    notificationMessage.textContent = message;
    notification.classList.add('show');
    if (isWarning) {
      notification.classList.add('warning');
    } else {
      notification.classList.remove('warning');
    }
    setTimeout(() => {
      notification.classList.remove('show');
      notification.classList.remove('warning');
    }, 3000);
  }

  async function fetchCartItems() {
    try {
      const response = await fetch('http://localhost:3000/api/cart');
      if (!response.ok) {
        throw new Error('Falha ao buscar itens do carrinho');
      }
      const items = await response.json();
      
      if (items.length === 0) {
        showNotification('O carrinho está vazio!', true);
        cartContent.style.display = 'none';
        return;
      }
      
      displayCartItems(items);

      const totalResponse = await fetch('http://localhost:3000/api/cart/total');
      if (!totalResponse.ok) {
        throw new Error('Falha ao buscar total do carrinho');
      }
      const total = await totalResponse.json();
      cartTotalDiv.textContent = `Total: R$ ${total.total.toFixed(2)}`;
      
      cartContent.style.display = 'block';
    } catch (error) {
      console.error('Erro ao buscar dados do carrinho:', error);
      showNotification('Erro ao buscar dados do carrinho. Por favor, tente novamente.', true);
    }
  }

  addItemButton.addEventListener('click', async () => {
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const quantity = parseInt(itemQuantityInput.value, 10);

    if (!name || isNaN(price) || isNaN(quantity) || quantity <= 0) {
      showNotification('Por favor, insira detalhes válidos do item', true);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nameItem: name,
          price: price,
          quantity: quantity
        })
      });
      if (!response.ok) {
        throw new Error('Falha ao adicionar item ao carrinho');
      }
      itemNameInput.value = '';
      itemPriceInput.value = '';
      itemQuantityInput.value = '';
      showNotification('Item adicionado com sucesso!');
      fetchCartItems();
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
      showNotification('Erro ao adicionar item ao carrinho. Por favor, tente novamente.', true);
    }
  });

  async function removeItem(nameItem) {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/remove/${nameItem}`, {
        method: 'POST'
      });
      if (!response.ok) {
        throw new Error('Falha ao remover item do carrinho');
      }
      showNotification('Item removido com sucesso!');
      fetchCartItems();
    } catch (error) {
      console.error('Erro ao remover item do carrinho:', error);
      showNotification('Erro ao remover item do carrinho. Por favor, tente novamente.', true);
    }
  }

  function displayCartItems(items) {
    cartItemsList.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="item-details">
          ${item.nameItem} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | SubTotal: R$ ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button class="remove-item" data-name="${item.nameItem}">
          <i class="fas fa-minus"></i> Remover
        </button>
      `;
      cartItemsList.appendChild(li);
    });

    // Adicionar event listeners para os botões de remover
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const itemName = e.target.closest('.remove-item').dataset.name;
        removeItem(itemName);
      });
    });
  }

  fetchButton.addEventListener('click', fetchCartItems);
});