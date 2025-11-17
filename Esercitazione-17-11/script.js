let utenti = [];

function creaUtente(nome, eta, professione = "non specificata") {
  return {
    nome,
    eta,
    professione
  };
}

const generaMessaggio = (utente) =>
  `${utente.nome} ha ${utente.eta} anni e di professione è ${utente.professione}.`;
document.getElementById("aggiungi").addEventListener("click", aggiungiUtente);

function aggiungiUtente() {
  let nome = document.getElementById("nome").value.trim();
  let eta = Number(document.getElementById("eta").value);
  let professione = document.getElementById("professione").value.trim();

  if (!nome) {
    console.error("Nome mancante!");
    return;
  }

  if (!eta || eta <= 0) {
    console.warn("Età non valida");
    return;
  }

  let messaggio = "Utente aggiunto!";
  console.log(messaggio);

  const nuovoUtente = creaUtente(nome, eta, professione);
  utenti.push(nuovoUtente);

  debugUtenti();

  mostraUtenti();

  document.getElementById("nome").value = "";
  document.getElementById("eta").value = "";
  document.getElementById("professione").value = "";
}

function mostraUtenti() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  
  for (const utente of utenti) {
    lista.innerHTML += `
      <div class="utente">
        <p>${utente.nome}</p>
        <p>(${utente.eta} anni)</p>
        <p>Professione: ${utente.professione}</p>
        <p>${generaMessaggio(utente)}</p>
      </div>
    `;
  }
}


function debugUtenti() {
  console.table(utenti);

  for (let i in utenti) {
    console.log(`--- Utente #${i} ---`);
    for (let prop in utenti[i]) {
      console.log(prop + ":", utenti[i][prop]);
    }
  }
}