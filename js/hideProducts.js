// hideProducts.js
document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('products-link');
    // Toggle this flag when you’re ready to sell
    const productsEnabled = false;
  
    if (!productsEnabled) {
      link.style.display = 'none';
    }
  });