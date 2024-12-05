// scripts.js
let cart = [];

function toggleCart() {
  const cartElement = document.getElementById('cart');
  cartElement.classList.add('open');
}

function closeCart() {
  const cartElement = document.getElementById('cart');
  cartElement.classList.remove('open');
}

function addToCart(productName, price) {
  const existingProduct = cart.find(item => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: productName, price, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cartCountElement = document.getElementById('cart-count');
  const cartTotalElement = document.getElementById('cart-total');

  if (cart.length === 0) {
    cartItemsElement.innerHTML = '<p>El carrito está vacío.</p>';
    cartTotalElement.innerHTML = '<strong>Total: $0.00</strong>';
  } else {
    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    cartItemsElement.innerHTML = cart
      .map(
        item => `
        <div>
          <p>${item.name}</p>
          <p>Precio: $${item.price.toFixed(2)}</p>
          <p>Cantidad: ${item.quantity}</p>
        </div>
      `
      )
      .join('');

    cartTotalElement.innerHTML = `<strong>Total: $${totalCost.toFixed(2)}</strong>`;
  }

  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
  cartCountElement.textContent = totalItems;
}
