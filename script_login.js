document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const registerBtn = document.querySelector('.register');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add login logic here
            console.log('Login attempted');
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Navigate to registration page
            window.location.href = 'register.html';
        });
    }
});