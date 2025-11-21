function addToCart(event) {
  const id = parseInt(event.target.dataset.id);
  const item = cart.find(c => c.productId === id);

  if (item) item.quantity++;
  else cart.push({ productId: id, quantity: 1 });

  updateCart();
  updateTotal();
}
