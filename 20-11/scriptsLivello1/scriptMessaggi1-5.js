// Esercizio 1.5
let messagges = ["hey", "ciao", "tutto bene?", "ok"];

messagges.push("arrivo");
messagges.unshift("start");

messagges.pop();

let middleMessagge = messagges.slice(1, messagges.length - 1);

console.log(messagges, middleMessagge);
