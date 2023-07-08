const menuActive = document.querySelector('.menu-active');
const headerMenu = document.querySelector('.burger-menu__list');
const menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);