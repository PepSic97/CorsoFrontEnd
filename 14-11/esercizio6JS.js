//Sesto esercizio INTERAZIONE CON L’UTENTE

function startPrompt() {
    let nome = document.getElementById("nomeUtente").value;

    if (nome.trim() === "") {
        alert("Per favore inserisci un nome!");
        return;
    }
    getName(nome);
}

function getName(nome) {
    alert("Ciao " + nome + "!");
    let numero = prompt("Dammi un numero:");
    let quadrato = numero * numero;
    alert("Il quadrato è: " + quadrato);
}

