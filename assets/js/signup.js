const images = document.querySelectorAll('.transition-image');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, 3000);

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form input values
    var name = document.getElementById('name').value.trim();
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    // Validate form input
    if (!name || !username || !email || !password) {
        showAlert('Please fill in all fields.', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showAlert('Please enter a valid email address.', 'error');
        return;
    }

    // Create a new user object
    var newUser = {
        name: name,
        username: username,
        email: email,
        password: password
    };

    // Retrieve existing users from localStorage (or create an empty array)
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if username already exists
    var userExists = existingUsers.some(function(user) {
        return user.username === newUser.username;
    });

    if (userExists) {
        showAlert('Username already exists. Please choose another one.', 'error');
    } else {
        // Add the new user to the array of existing users
        existingUsers.push(newUser);

        // Save the updated list of users to localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Store user session in sessionStorage after registration
        sessionStorage.setItem('loggedInUser', JSON.stringify(newUser));

        // Show success message and redirect to login page
        showAlert('Registration successful! Redirecting to main page...', 'success');
        setTimeout(function() {
            window.location.href = 'Home.html';
        }, 2000);
    }
});

function showAlert(message, type) {
    var alertMessage = document.createElement('p');
    alertMessage.textContent = message;
    alertMessage.className = `alert-message ${type}`;
    document.querySelector('.login-form').appendChild(alertMessage);

    setTimeout(function() {
        alertMessage.remove();
    }, 3000);
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
