document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
    } else {
        errorMessage.textContent = "";
        alert('Signup successful!');
        // You can add further logic here, such as sending data to a server.
    }
});
