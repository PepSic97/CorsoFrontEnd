function removeFromCart(event) {
  const id = parseInt(event.target.dataset.id);
  const index = cart.findIndex(c => c.productId === id);
  if (index !== -1) cart.splice(index, 1);
  updateCart();
  updateTotal();
}
