
const menuItems = document.querySelectorAll("#menu li");
const description = document.getElementById("description");
const price = document.getElementById("price");
const details = document.getElementById("item-details");


menuItems.forEach(item => {
    item.addEventListener("click", () => {
        
        description.textContent = `Description: ${item.dataset.description}`;
        price.textContent = `Price: ${item.dataset.price}`;
        details.style.display = "block";
    });
});
