// Retrieve the cart data from localStorage
const carts = JSON.parse(localStorage.getItem('cart')) || [];
const listProducts = [
  {
    "id":1,
    "name":"Burger",
    "price":100,
    "image":"fd1.jpg"
},
{
    "id":2,
    "name":"Tacos",
    "price":75,
    "image":"fd2.jpg"
},
{
    "id":3,
    "name":"Pizza(Tomato and Corn)",
    "price":200,
    "image":"fd3.jpg"
},
{
    "id":4,
    "name":"Sandwich",
    "price":150,
    "image":"fd4.jpg"
},
{
    "id":5,
    "name":"Choco Lava Cake",
    "price":200,
    "image":"fd5.jpg"
},
{
    "id":6,
    "name":"Cappuccino",
    "price":100,
    "image":"fd6.jpg"
}
,
{
    "id":7,
    "name":"Brownie",
    "price":150,
    "image":"fd5.jpg"
},

{
    "id":8,
    "name":"Veggie Roll",
    "price":150,
    "image":"fd5.jpg"
},

{
    "id":9,
    "name":"Idli",
    "price":150,
    "image":"fd5.jpg"
},

{
    "id":10,
    "name":"Golgappa(6 pieces)",
    "price":30,
    "image":"fd5.jpg"
},
{
    "id":11,
    "name":"Gulab Gamun",
    "price":50,
    "image":"fd5.jpg"
},
{
    "id":12,
    "name":"Chowmein",
    "price":70,
    "image":"fd5.jpg"
}
];

// Calculate the total amount from the cart data
const calculateTotalAmount = () => {
  let totalAmount = 0;

  carts.forEach(cartItem => {
    const product = listProducts.find(p => p.id == cartItem.product_id);
    if (product) {
      totalAmount += product.price * cartItem.quantity;
    }
  });

  return totalAmount;
}

// Call the function to get the total amount
const totalAmount = calculateTotalAmount();
console.log('Total Amount:', totalAmount);

// Example usage in a button click event (assuming you have a confirm button with id 'confirm-btn')
document.getElementById('confirm-btn').addEventListener('click', function() {
  // Get the selected delivery option
  const selectedOption = document.getElementById('delivery-option').value;

  // Calculate delivery cost
  const deliveryCost = selectedOption === 'standard' ? 5 : 10;

  // Calculate total amount including delivery
  const totalPrice = totalAmount + deliveryCost;

  // Display the selected delivery option and total amount
  document.getElementById('result').innerHTML = `
    Selected Delivery Option: ${selectedOption} <br>
    Total Amount: Rs.${totalPrice.toFixed(2)}
  `;
});
