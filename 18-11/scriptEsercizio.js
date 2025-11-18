// Elementi <a>
const tuttiLink = document.querySelectorAll('a');
console.log("Tutti gli <a>:", tuttiLink);

// Paragrafi
const paragrafi = document.querySelectorAll('p');
console.log("Numero di paragrafi:", paragrafi.length);

// Elementi con attributo "data-id"
const elementiDataId = document.querySelectorAll('[data-id]');
console.log("Elementi con data-id:", elementiDataId);

// Href che inizia con "#"
const linkInterni = document.querySelectorAll('a[href^="#"]');
console.log("Link interni (#):", linkInterni);
