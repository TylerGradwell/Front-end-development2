document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    
    alert(`Welcome! Your account with email ${email} has been created.`);
});