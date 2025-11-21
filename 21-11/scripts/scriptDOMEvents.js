window.addEventListener("DOMContentLoaded", () => {
  showCatalog();
  updateCart();
  updateTotal();

  document.getElementById("search").addEventListener("input", showCatalog);
  document.getElementById("categoryFilter").addEventListener("change", showCatalog);
  document.getElementById("clearCart").addEventListener("click", clearCart);
});
