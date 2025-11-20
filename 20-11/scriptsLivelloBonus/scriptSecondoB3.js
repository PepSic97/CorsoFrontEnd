// Esercizio B3
function secondOfFirst(...arrays) {
  const [firstArray] = arrays;
  if (!firstArray || firstArray.length < 2) return undefined;

  const [, second] = firstArray;
  return second;
}

console.log(secondOfFirst([10, 20, 30], [1, 2]));
