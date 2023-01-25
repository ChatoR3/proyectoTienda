const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('click');
    mobileMenu.classList.toggle('inactive');
}

console.log('JavaScript Funcionando');