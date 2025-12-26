function renderFurniture(filter = 'all') {
    const container = document.getElementById('furniture-container');
    container.innerHTML = '';

    const filtered = filter === 'all'
        ? furnitureData
        : furnitureData.filter(item => item.type === filter);

    filtered.forEach(item => {
        const card = `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text text-muted">${item.description.substring(0, 80)}...</p>
            <div class="d-flex justify-content-between align-items-center mt-3">
              <span class="h5 mb-0">$${item.price.toLocaleString()}</span>
              <a href="/furniture-detail?id=${item.id}" class="btn btn-primary-vibrant btn-sm">View Details</a>
            </div>
          </div>
        </div>
      </div>
    `;
        container.innerHTML += card;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderFurniture();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const type = e.target.getAttribute('data-type');
            renderFurniture(type);
        });
    });
});
