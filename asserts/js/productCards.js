
    document.querySelectorAll('.heart-icon').forEach(icon => {
      icon.addEventListener('click', () => {
        icon.classList.toggle('liked');
        icon.classList.toggle('bi-heart');
        icon.classList.toggle('bi-heart-fill');
      });
    });
 
     (function(){
  const KEY = 'wishlistItems';
  function getWishlist() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  }
  function saveWishlist(arr) {
    localStorage.setItem(KEY, JSON.stringify(arr));
  }
  function toggleProduct(product) {
    const list = getWishlist();
    const exists = list.find(x => x.id === product.id);
    if (exists) {
      const newList = list.filter(x => x.id !== product.id);
      saveWishlist(newList);
      return false;
    } else {
      list.push(product);
      saveWishlist(list);
      return true;
    }
  }

  function setupProductCards() {
    document.querySelectorAll('.wish-card').forEach(card => {
      const id = card.dataset.id;
      const product = {
        id,
        title: card.dataset.title,
        img: card.dataset.img,
        price: card.dataset.price
      };
      const heart = card.querySelector('.heart-icon');
      if (getWishlist().some(x => x.id === id)) {
        heart.classList.add('liked','bi-heart-fill');
        heart.classList.remove('bi-heart');
      }
      heart.addEventListener('click', e => {
        e.stopPropagation();
        const liked = toggleProduct(product);
        heart.classList.toggle('liked', liked);
        heart.classList.toggle('bi-heart-fill', liked);
        heart.classList.toggle('bi-heart', !liked);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', setupProductCards);
})();
