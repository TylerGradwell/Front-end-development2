//adds an event that triggers when form is submitted
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevents my page from refreshing automatically
    
    const email = document.getElementById('email').value;
    
    alert(`Welcome! Your account with email ${email} has been created.`);
});//gets value from input field and displays alert message