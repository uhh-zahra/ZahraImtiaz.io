let basket = [];

function addToBasket(item) {
    // Add the item to the basket array
    basket.push(item);

    // Update the basket display
    updateBasket();
}

function updateBasket() {
    const basketCount = document.getElementById('basket-count');
    const basketItems = document.getElementById('basket-items');

    // Update the basket count in the header
    basketCount.innerText = basket.length;

    // Update the basket section with a list of items
    if (basket.length > 0) {
        basketItems.innerHTML = ''; // Clear previous content
        const ul = document.createElement('ul');
        basket.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        basketItems.appendChild(ul);
    } else {
        basketItems.innerHTML = '<p>Your basket is currently empty.</p>';
    }
}

function clearBasket() {
    basket = [];  // Clear the basket array
    updateBasket();  // Update the display to reflect empty basket
}

// Event listener for starting the chocolate box building process
document.getElementById("start-building").addEventListener("click", function() {
    const selectedOccasion = document.getElementById("occasion-select").value;
    alert(`You have selected ${selectedOccasion}. Let's start building your chocolate box!`);
});

// Event listener for sign-in button
document.getElementById("sign-in-btn").addEventListener("click", function() {
    alert("You have signed in...");
});
