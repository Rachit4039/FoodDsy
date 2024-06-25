
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

 
    var foundUser = registeredUsers.find(function(user) {
        return user.username === username && user.password === password;
    });
    if (foundUser) {
      
        isLoggedIn = true;
    
        window.location.href = 'Home.html';
    } else {
        // 
        var errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.color = 'red';

    
        var loginContainer = document.querySelector('.login-container');
        loginContainer.appendChild(errorMessage);
    }
});
