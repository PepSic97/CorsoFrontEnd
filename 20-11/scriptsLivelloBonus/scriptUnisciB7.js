// Esercizio B7
const a1 = [1, 2];
const a2 = ["a", "b"];
const a3 = [true, false];

const united = [...a1, ...a2, ...a3];

console.log("Il risultato dell'unione è: " + united.join(", "));
