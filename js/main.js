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
    console.log('click');
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    console.log('click');
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
    console.log('click');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

console.log('JavaScript Funcionando');