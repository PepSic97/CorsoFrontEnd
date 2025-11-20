// Esercizio 1.1
let playlist = ["Heat", "Sunrise", "Echo"];

playlist.push("Wave", "Moon");

let first = playlist.shift();

playlist.push(first);

let middleElement = playlist.slice(1, playlist.length - 1);

console.log(playlist, middleElement);
