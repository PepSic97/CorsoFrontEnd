// Esercizio 2.2
function concatenaSep(sep, ...pezzi) {
  return pezzi.join(sep);
}

console.log(concatenaSep("-", "a", "b", "c"));

let arr = ["x", "y", "z"];
console.log(concatenaSep(",", ...arr));
