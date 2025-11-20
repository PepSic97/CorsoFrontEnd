// Esercizio B8
function describeProduct({ productName, productPrice = 20 }) {
  return `Il prodotto ${productName} costa ${productPrice}`;
}

console.log(describeProduct({ productName: "Bicicletta", productPrice: 199 }));
console.log(describeProduct({ productName: "Sedia" }));
