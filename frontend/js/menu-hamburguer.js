// Obtém o elemento com o ID 'burger-menu'
const burgerMenu = document.getElementById("burger-menu");

// Obtém o elemento com o ID 'menu'
const overlay = document.getElementById("menu");

burgerMenu.addEventListener("click", function () {
 
  burgerMenu.classList.toggle("close"); /* Alterna a classe "close" no elemento burgerMenu
  Se a classe estiver presente, ela será removida; se não estiver, ela será adicionada */

  overlay.classList.toggle("overlay"); /* Alterna a classe "overlay" no elemento overlay
  Se a classe estiver presente, ela será removida; se não estiver, ela será adicionada */
});
