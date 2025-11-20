// Esercizio 1.4
let gifts = ["Libro", "Puzzle", "Sciarpa"];

gifts.unshift("Gioco", "Peluches");

gifts.splice(1, 1);

let lastGift = gifts.slice(-2);

console.log(gifts, lastGift);
