// Esercizio 2.5
function sommaVar(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log("La prima somma di tutti i numeri ricevuti è: " + sommaVar(1, 2, 3));

let arrNumbers = [4, 5, 6];
console.log("La seconda somma di tutti i numeri ricevuti è: " + sommaVar(...arrNumbers));
