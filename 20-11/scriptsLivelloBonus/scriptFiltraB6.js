// Esercizio B6
function filterLongStrings(...strings) {
  return "Le parole che hanno superato il filtro sono: " +  strings.filter(s => s.length > 3).join(", ");
}

console.log(filterLongStrings("ciao", "hi", "test", "ok", "javascript"));
