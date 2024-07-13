let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");

let products = [
  { "id": 1, "name": "Burger", "price": 100, "image": "assets/images/fd1.jpg" },
  { "id": 2, "name": "Tacos", "price": 75, "image": "assets/images/mexican-tacos-with-beef-beans-tomato-sauce-salsa.jpg" },
  { "id": 3, "name": "Pizza(Tomato and Corn)", "price": 200, "image": "assets/images/fd3.jpg" },
  { "id": 4, "name": "Sandwich", "price": 150, "image": "assets/images/panini-sandwich-with-ham-cheese-tomato-arugula-black-slate-background.jpg" },
  { "id": 5, "name": "Choco Lava Cake", "price": 200, "image": "assets/images/closeup-shot-chocolate-cake-wooden-table.jpg" },
  { "id": 6, "name": "Cappuccino", "price": 100, "image": "assets/images/cup-three-layered-coffee-dark.jpg" },
  { "id": 7, "name": "Brownie", "price": 150, "image": "assets/images/fd5.jpg" },
  { "id": 8, "name": "Veggie Roll", "price": 150, "image": "assets/images/side-view-shawarma-with-fried-potatoes-board-cookware.jpg" },
  { "id": 9, "name": "Idli", "price": 150, "image": "assets/images/freshly-cooked-meal-pork-rice-generated-by-ai.jpg" },
  { "id": 10, "name": "Golgappa(6 pieces)", "price": 30, "image": "assets/images/panipuri_gupchup_indian_food_0.jpg" },
  { "id": 11, "name": "Gulab Gamun", "price": 50, "image": "assets/images/indian_sweet_gulab_jamun.jpg" },
  { "id": 12, "name": "Chowmein", "price": 70, "image": "assets/images/delicious-asian-noodles-concept.jpg" }
];

let listProducts = [];
let carts = [];
let listCartHTML = document.querySelector('.ListCart');
let iconCart = document.querySelector('.fa-bag-shopping');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.foodCard');
let iconCartSpan = document.querySelector('.fa-bag-shopping span');
listProducts = products;

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
});

const addToCart = (product_id) => {
  console.log("Product ID added to cart:", product_id);
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
  if (carts.length <= 0) {
    carts.push({
      product_id: product_id,
      price: products[product_id - 1].price,
      quantity: 1
    });
  } else if (positionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      price: products[product_id - 1].price,
      quantity: 1
    });
  } else {
    carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
  console.log(carts);
  displayTotalPrice();
};

listProductHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('add')) {
    let product_id = positionClick.parentElement.dataset.id;
    addToCart(product_id);
  }
});

const addCartToMemory = () => {
  localStorage.setItem('cart', JSON.stringify(carts));
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if (carts.length > 0) {
    carts.forEach(cart => {
      totalQuantity += cart.quantity;
      let newCart = document.createElement('div');
      newCart.classList.add('item');
      newCart.dataset.id = cart.product_id;

      let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
      let info = listProducts[positionProduct];
      newCart.innerHTML = `
        <div class="image">
          <img src="${info.image}" alt="">
        </div>
        <div class="name">
          ${info.name}
        </div>
        <div class="totalPrice">
          ₹${info.price * cart.quantity}
        </div>
        <div class="quantity">
          <span class="minus"><</span>
          <span>${cart.quantity}</span>
          <span class="plus">></span>
        </div>
        <hr><hr><hr><hr>
      `;
      listCartHTML.append(newCart);
    });
  }
  iconCartSpan.innerText = totalQuantity;
  displayTotalPrice();
};

listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
    let productId = positionClick.parentElement.parentElement.dataset.id;
    let type = 'minus';
    if (positionClick.classList.contains('plus')) {
      type = 'plus';
    }
    changeQuantity(productId, type);
  }
  displayTotalPrice();
});

const changeQuantity = (productId, type) => {
  let positionItemInCart = carts.findIndex((value) => value.product_id == productId);

  if (positionItemInCart >= 0) {
    switch (type) {
      case 'plus':
        carts[positionItemInCart].quantity += 1; // Increase quantity
        break;
      case 'minus':
        if (carts[positionItemInCart].quantity > 1) {
          carts[positionItemInCart].quantity -= 1; // Decrease quantity if greater than 1
        } else {
          carts.splice(positionItemInCart, 1); // Remove item if quantity is 1
        }
        break;
      default:
        break;
    }
  }
  addCartToMemory();
  addCartToHTML();
  displayTotalPrice();
};

const initApp = () => {
  if (localStorage.getItem('cart')) {
    carts = JSON.parse(localStorage.getItem('cart'));
    addCartToHTML();
  }
};

initApp();

function calculateTotalPrice() {
  let totalCart = 0;
  totalCart = carts.reduce((total, cart) => total + cart.price * parseInt(cart.quantity), 0);
  return totalCart;
}

function displayTotalPrice() {
  const totalPrice = calculateTotalPrice();
  const totalPriceDiv = document.getElementsByClassName('totalSpan')[0];
  totalPriceDiv.textContent = `Total ₹: ${totalPrice}`;
}

displayTotalPrice();


var isLoggedIn=false;
function displayname(){
  var userNameDisplay = document.querySelector('.user-name'); // Assuming this is where you want to display the user's name
  var loggedInUser = sessionStorage.getItem('loggedInUser');
  if (loggedInUser) {
    // If user is logged in
    var user = JSON.parse(loggedInUser);
    userNameDisplay.textContent = user.username;
}
else{
  userNameDisplay.textContent = ''; 
}

}

displayname();