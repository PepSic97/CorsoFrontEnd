function updateTotal() {
  const totalSpan = document.getElementById("total");
  let total = 0;
  cart.forEach(item => {
    const product = productCatalog.find(p => p.id === item.productId);
    total += product.price * item.quantity;
  });
  totalSpan.textContent = total;
}
