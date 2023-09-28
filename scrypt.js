document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your authentication logic here.
    // For this example, let's assume the username is "admin" and password is "password".
    if (username === "admin" && password === "password") {
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password.");
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Add your registration logic here.
    // For this example, let's assume successful registration.

    alert("Registration successful! You can now log in.");
});
