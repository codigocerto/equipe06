const burgerMenu = document.getElementById('burger-menu');

const overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
    
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
