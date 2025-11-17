function calcola(tipo) {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  switch (tipo) {
    case 1:
      risultato = n1 + n2;
      break;
    case 2:
      risultato = n1 - n2;
      break;  
    case 3:
      risultato = n1 * n2;
      break;
    case 4:
      risultato = n1 / n2;
      break;
    } 
  document.getElementById("risultato").textContent = "Risultato: " + risultato;
}

function resetta() {
  document.getElementById("n1").value = "";
  document.getElementById("n2").value = "";
  document.getElementById("risultato").textContent = "";
}
