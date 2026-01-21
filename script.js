let cart = [];
let total = 0;

function addToCart(service, price) {
    cart.push({ service, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.service} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}
