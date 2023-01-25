const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);
hamMenuIcon.addEventListener('click', toogleMobileMenu);

function toogleDesktopMenu(){
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

console.log('JavaScript funcionando');