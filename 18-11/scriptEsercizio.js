//Esercizio 2.1
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

//Esercizio 2.2
// Elemento id "contenuto"
const contenuto = document.getElementById("contenuto");
console.log("Elemento #contenuto:", contenuto);

// Trovo Genitore
const genitore = contenuto.parentElement;
console.log("Genitore di #contenuto:", genitore);

// Trovo figli diretti
const figliDiretti = genitore.children;
console.log("Figli diretti di #contenuto:", figliDiretti);

// Trovo fratello successivo (se esiste)
const fratelloSuccessivo = figliDiretti.nextElementSibling;
if (fratelloSuccessivo) {
    console.log("Fratello successivo di #contenuto:", fratelloSuccessivo);}
    else {
    console.log("Non ha un fratello successivo.");
}
