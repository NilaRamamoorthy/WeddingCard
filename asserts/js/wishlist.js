 (function(){
  const KEY = 'wishlistItems';
  function getWishlist() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  }
  function saveWishlist(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
  }
  function toggleProduct(id) {
    const list = getWishlist();
    const newList = list.filter(x => x.id !== id);
    saveWishlist(newList);
  }

  function renderWishlist() {
    const container = document.getElementById('wishlist-container');
    const list = getWishlist();
    container.innerHTML = '';
    if (!list.length) {
      container.innerHTML = '<p class="text-center">Your wishlist is empty.</p>';
      return;
    }
    list.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col';
      col.innerHTML = `
        <div class="card h-100 p-2" data-id="${item.id}">
          <i class="heart-icon bi bi-heart-fill liked"></i>
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body text-center">
            <h6 class="card-title">${item.title}</h6>
            <p class="card-text text-danger fw-bold">${item.price}</p>
          </div>
        </div>`;
      const heart = col.querySelector('.heart-icon');
      heart.addEventListener('click', () => {
        toggleProduct(item.id);
        renderWishlist();
      });
      container.appendChild(col);
    });
  }

  document.addEventListener('DOMContentLoaded', renderWishlist);
})();