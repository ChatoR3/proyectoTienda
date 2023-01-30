const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toogleCarritoAside);


function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('click');
    mobileMenu.classList.toggle('inactive');
}

console.log('JavaScript Funcionando');