/**
 * NaturaGlow Skincare - Main JavaScript
 * Handles cart management in localStorage, header badge updates, mobile menu, and global UI interactions.
 */

// Cart State Management
function getCart() {
  try {
    const cart = localStorage.getItem('naturaglow_cart');
    return cart ? JSON.parse(cart) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('naturaglow_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === Number(productId));
  if (!product) return;

  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`Added ${product.name} to your bag!`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== Number(productId));
  saveCart(cart);
}

function updateQuantity(productId, quantity) {
  let cart = getCart();
  const item = cart.find(item => item.id === Number(productId));
  if (item) {
    item.quantity = Number(quantity);
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== Number(productId));
    }
  }
  saveCart(cart);
}

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

function showToast(message) {
  // Remove existing toast if any
  const existingToast = document.querySelector('.toast-notification');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: #1C2826;
    color: #FFFFFF;
    padding: 0.85rem 1.75rem;
    border-radius: 30px;
    font-size: 0.95rem;
    font-weight: 500;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 1000;
    animation: fadeInUp 0.3s ease;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Mobile Drawer & UI Initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeDrawer = document.querySelector('.close-drawer');

  function toggleMenu() {
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  if (hamburger) hamburger.addEventListener('click', toggleMenu);
  if (closeDrawer) closeDrawer.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', toggleMenu);

  // Add WhatsApp Floating Button to DOM if not present
  if (!document.querySelector('.whatsapp-float')) {
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/919876543210?text=Hi%20NaturaGlow,%20I%20have%20a%20query%20about%20your%20skincare%20products.';
    whatsappBtn.target = '_blank';
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.title = 'Chat on WhatsApp';
    whatsappBtn.innerHTML = '💬';
    document.body.appendChild(whatsappBtn);
  }
});
