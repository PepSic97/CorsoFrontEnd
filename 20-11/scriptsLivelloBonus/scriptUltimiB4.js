// Esercizio B4
function lastTwo([, second, third]) {
  return "Gli ultimi due elementi dell'array sono: " +  [second, third].join(", ");
}

console.log(lastTwo([7, 9, 11]));
