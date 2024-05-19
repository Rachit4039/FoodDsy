let loader = document.querySelector(".loadPage");
let container = document.querySelector(".container");
let cards = document.querySelectorAll(".card");

cards.forEach(function(card){
  card.addEventListener("click", function(){
     console.log(card);

     document.querySelector("body").innerHTML="";
     let div = document.createElement("div");
     div.classList.add("foodDetail");
     div.innerHTML=`
     <img src=${card.firstElementChild.src} alt="">
       <div class="detailText">
           <h1>Foods You Like</h1>
           <h2>Upto 40% OFF</h2>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <p>Pay on delivery might be available</p>
           <button>Add To Cart</button>
           <a href="">Back</a>
       </div>
     `
     document.querySelector("body").appendChild(div)
  })
})

//  loading effect
container.style.display="none";

  setInterval(function(){
     container.style.display="block";
    
        loader.style.display="none"
     },2000)

// Assuming this variable tracks the login state, set it to true when the user is logged in
var isLoggedIn = false;

// Function to toggle the visibility of login button and user icon
function toggleLoginButton() {
    var loginBtn = document.querySelector('.login-btn');
    var userIcon = document.querySelector('.fa-user'); // Assuming this is your user icon element

    if (isLoggedIn) {
        // If user is logged in, hide the login button and show the user icon
        loginBtn.style.display = 'none';
        userIcon.style.display = 'inline-block';
    } else {
        // If user is not logged in, show the login button and hide the user icon
        loginBtn.style.display = 'inline-block';
        userIcon.style.display = 'none';
    }
}

// Call the function initially
toggleLoginButton();

// Assuming this function is called when the user successfully logs in
function loginUser() {
    // Perform login process here...

    // After successful login, set isLoggedIn to true
    isLoggedIn = true;

    // Call toggleLoginButton to hide the login button and show the user icon
    toggleLoginButton();
}
