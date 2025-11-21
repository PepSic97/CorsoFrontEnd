function increaseQty(event) {
  const id = parseInt(event.target.dataset.id);
  const item = cart.find(c => c.productId === id);
  if (item) {
    item.quantity++;
    updateCart();
    updateTotal();
  }
}

function decreaseQty(event) {
  const id = parseInt(event.target.dataset.id);
  const index = cart.findIndex(c => c.productId === id);
  if (index !== -1) {
    if (cart[index].quantity > 1) cart[index].quantity--;
    else cart.splice(index, 1);
    updateCart();
    updateTotal();
  }
}