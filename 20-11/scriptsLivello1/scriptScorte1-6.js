// Esercizio 1.6
let scorte = [12, 5, 8, 3, 9];

scorte.push(4, 6);

scorte.shift();

let lastRemain = scorte.pop();
scorte.unshift(lastRemain);

let middleScorte = scorte.slice(1, scorte.length - 1);

console.log(scorte, middleScorte);
