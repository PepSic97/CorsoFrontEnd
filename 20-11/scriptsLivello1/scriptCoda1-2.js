// Esercizio 1.2
let coda = ["A", "B", "C", "D"];

coda.unshift("X", "Y");

coda.pop();

let removed = coda.splice(1, 1)[0];

console.log(coda, removed);
