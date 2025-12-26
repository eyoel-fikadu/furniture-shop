document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const content = document.getElementById('detail-content');

    const product = furnitureData.find(item => item.id === productId);

    if (!product) {
        content.innerHTML = '<h2 class="text-white">Product not found.</h2>';
        return;
    }

    content.innerHTML = `
    <div class="col-lg-6 mb-5 mb-lg-0">
      <img src="${product.image}" class="detail-img animate__animated animate__fadeInLeft" alt="${product.name}">
    </div>
    <div class="col-lg-6">
      <div class="auth-card w-100 max-w-none animate__animated animate__fadeInRight">
        <span class="badge bg-primary mb-2 text-uppercase">${product.type}</span>
        <h1 class="display-5 fw-bold mb-3">${product.name}</h1>
        <h2 class="text-primary-vibrant mb-4">$${product.price.toLocaleString()}</h2>
        
        <p class="lead mb-4">${product.description}</p>
        
        <div class="material-box mb-4">
          <h6 class="text-uppercase small fw-bold text-muted mb-3">Materials & Craftsmanship</h6>
          <p class="mb-0 small">${product.material}</p>
        </div>
        
        <div class="mb-5">
          <h6 class="text-uppercase small fw-bold text-muted mb-2">Dimensions</h6>
          <p class="mb-0">${product.dimensions}</p>
        </div>
        
        <button class="btn btn-primary-vibrant btn-lg w-100" onclick="addToCart('${product.name}', ${product.price})">
          Add to Cart & Checkout
        </button>
      </div>
    </div>
  `;
});
