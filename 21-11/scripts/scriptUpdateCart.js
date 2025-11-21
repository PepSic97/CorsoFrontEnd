function updateCart() {
  const cartSection = document.getElementById("cart");
  cartSection.innerHTML = "";

  if (cart.length === 0) {
    cartSection.innerHTML = "<p>Il carrello è vuoto</p>";
    return;
  }

  cart.forEach(item => {
    const product = productCatalog.find(p => p.id === item.productId);
    const subtotal = product.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" class="cart-img" />
      <h4>${product.name} — ${product.price} €</h4>

      <div class="quantity-line">
        <span>Quantità: ${item.quantity}</span>
        <div class="qty-buttons">
          <button class="qty-btn plus" data-id="${product.id}">+</button>
          <button class="qty-btn minus" data-id="${product.id}">-</button>
        </div>
      </div>

      <button class="remove-btn" data-id="${product.id}">Rimuovi</button>
    `;

    cartSection.appendChild(div);
  });

  document.querySelectorAll(".qty-btn.plus").forEach(btn => btn.addEventListener("click", increaseQty));
  document.querySelectorAll(".qty-btn.minus").forEach(btn => btn.addEventListener("click", decreaseQty));
  document.querySelectorAll(".remove-btn").forEach(btn => btn.addEventListener("click", removeFromCart));
}