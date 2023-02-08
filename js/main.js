const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

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


// Creamos Lista de productos manualmente
const productList = [];

productList.push({
    name: 'Skateboard',
    price: 120,
    image: 'https://images.pexels.com/photos/3256741/pexels-photo-3256741.jpeg?cs=srgb&dl=pexels-nothing-ahead-3256741.jpg&fm=jpg&_gl=1*17vpvak*_ga*MjkxNzYzNDM1LjE2NjE4NzkwNDA.*_ga_8JE65Q40S6*MTY2NjAzNTEyNy42LjEuMTY2NjAzNTIxOC4wLjAuMA..'
});

productList.push({
    name: 'Bicicleta',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
});

/*

    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>

*/

// Atajo para crear ciclo FOR =     for (product of productList), el elemento product será cada objeto que esté dentro de nuestro array
                                    // prduct of productList, nos muestra los nombres de los productos
// Otra forma es for (product in productList), nos muestra el índice en lugar del nombre

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');  //document.createElement nos crea cada elemento html con javascript ()
        productCard.classList.add('product-card');  // Se agrega la clase que tiene nuestro div en html
     
    //Creamos nuestro código html a través de JavaScript
     // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);  //Se modifica el atributo src con la información de nuestro array
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;   //Propiedad .innerText agrega texto
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './img/icons/bt_add_to_cart.svg'); //Este atributo no está en el array por lo que se 
                                                                              //coloca la ubicación donde se encuentra el elemento
        

        productInfoFigure.appendChild(productImgCart); // contenedor img se agrega dentro del elemento (tag/etiqueta) figure
     
        productInfo.appendChild(productInfoDiv); // contenedor productInfoDiv se agrega al elemento (tag/etiqueta) productInfo
        productInfo.appendChild(productInfoFigure); //contenedor productInfoFigure se agrega al elemento (tag/etiqueta) productInfo
     
        productCard.appendChild(productImg);  //contenedor productImg y productInfo se agregan al elemento (tag/etiqueta) produtCard
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard); //contenedor productCard se agrega al elemento (tag/etiqueta) cardsContainer
     }
     
}

renderProducts(productList);

console.log('JavaScript Funcionando');

