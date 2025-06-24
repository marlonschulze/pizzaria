const btnMenu = document.getElementById('menu-hamburguer');
const navMenu = document.getElementById('menu');
const menuLinks = navMenu.querySelectorAll('a');

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  btnMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    btnMenu.classList.remove('active');
  });
});