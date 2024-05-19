document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get username and password from the signup form
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;

    // Store the new user in localStorage
    var newUser = {
        username: username,
        password: password
    };

    // Retrieve existing users from localStorage (or create an empty array)
    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if username already exists
    var userExists = existingUsers.some(function(user) {
        return user.username === newUser.username;
    });

    if (userExists) {
        alert('Username already exists. Please choose another one.');
    } else {
        // Add the new user to the array of existing users
        existingUsers.push(newUser);

        // Save the updated list of users to localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // Redirect to login page
        window.location.href = 'login.html';
    }
});
