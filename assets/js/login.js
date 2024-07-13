const images = document.querySelectorAll('.transition-image');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, 3000);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = registeredUsers.find(user => user.username === username && user.password === password);

    const loginContainer = document.querySelector('.login-form');

    // Clear any previous error messages
    const existingErrorMessage = loginContainer.querySelector('.error-message');
    if (existingErrorMessage) {
        existingErrorMessage.remove();
    }

    if (foundUser) {
        // Store user session in sessionStorage
        sessionStorage.setItem('loggedInUser', JSON.stringify(foundUser));

        // Redirect to Home page or perform any other actions
        window.location.href = 'Home.html';
    } else {
        // Show error message
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.color = 'red';
        errorMessage.classList.add('error-message');

        loginContainer.appendChild(errorMessage);

        // Remove the error message after 3 seconds
        setTimeout(() => {
            errorMessage.remove();
        }, 3000);
    }
});
