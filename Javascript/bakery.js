for (let count = 0; count < 10; count++) {
    console.log("customer number is", count);
}

const menuItems = ["cake", "donut", "bread", "muffin", "croissant"];
for (let item of menuItems) {
    console.log(item);
}

let pastriesinstock = 5;
while (pastriesinstock > 0) {
    console.log(`sold 1 pastry. Pastries left: ${--pastriesinstock}`);
}
if (pastriesinstock === 0) {
    console.log("All pastries are sold out");
}
const validChoices=["cake", "donut", "bread"];
let customerChoice;
do {
   customerChoice = prompt("Please choose between 'cake', 'donut or 'bread");
} while (!validChoices.includes(customerChoice));
console.log(`You chose: ${customerChoice}`);

const cakesSold = 7;
const donutsSold = 15;
const muffinsSold = 4;
const totalItemsSold = cakesSold + donutsSold + muffinsSold;
console.log(`Total items sold today: ${totalItemsSold}`);