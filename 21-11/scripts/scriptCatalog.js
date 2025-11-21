const productCatalog = [
  { id: 1, name: "Quaderni", category: "cancelleria", price: 10, imageUrl: "https://m.media-amazon.com/images/I/61gLF+PUCML._AC_SL1500_.jpg" },
  { id: 2, name: "Penne", category: "cancelleria", price: 2, imageUrl: "https://m.media-amazon.com/images/I/71wwSBtdcsL._AC_SL1500_.jpg" },
  { id: 3, name: "Zaino", category: "zaini", price: 30, imageUrl: "https://m.media-amazon.com/images/I/71TrNZRQbdL._AC_SL1463_.jpg" },
  { id: 4, name: "Matite", category: "cancelleria", price: 1, imageUrl: "https://m.media-amazon.com/images/I/81qxJ-PgGLL._AC_SL1500_.jpg" },
  { id: 5, name: "Tracolla", category: "zaini", price: 45, imageUrl: "https://m.media-amazon.com/images/I/81BKIbjZizL._AC_SY625_.jpg" }
];

let cart = [];

function showCatalog() {
  const catalogSection = document.getElementById("catalog");
  catalogSection.innerHTML = "";

  const searchTerm = document.getElementById("search").value.toLowerCase();
  const selectedCategory = document.getElementById("categoryFilter").value;

  const filteredProducts = productCatalog.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: ${product.price} €</p>
      <button data-id="${product.id}" class="add-btn">Aggiungi al carrello</button>
    `;

    catalogSection.appendChild(div);
  });

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", addToCart);
  });
}