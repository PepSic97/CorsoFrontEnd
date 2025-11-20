// Esercizio 3.3
function firstAndCount(...items) {
  const [first, ...remaining] = items;
  return {
    first,
    count: remaining.length
  };
}

console.log(firstAndCount(1, 2, 3, 4));
