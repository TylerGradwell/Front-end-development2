let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
 
function checkGuess() {
    guess = document.getElementById("guessInput").value;
    while (guess != randomNumber) {
        if (guess < randomNumber) {
            document.getElementById("result").innerText = "Too low! Try again.";
        } else if (guess > randomNumber) {
            document.getElementById("result").innerText = "Too high! Try again.";
        }
        return; // Exit the function to allow the user to guess again
    }
    document.getElementById("result").innerText = "Congratulations! You guessed it right.";
}