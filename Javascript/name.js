let name = window.prompt("what is your name")
alert("hello," + name + "!");
console.log("hello," + name + "!");
//above is for window greeting
function greetuser() {
    let name = document.getElementById("mytext").value;
    alert("Hello," + name + "!");
}
//above is a text box with a name submit button that says hello

let choice = prompt("Would you like to (1) add or (2) subtract numbers?");

if (choice === "1") {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    alert(num1 + " + " + num2 + " = " + (num1 + num2));
} else if (choice === "2") {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
} else {
    alert("Invalid choice!");
}

// number game

