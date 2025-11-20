// Esercizio 3.6
function summaryUser({ userName, userSurname, ...userThings }) {
  return {
    completeUserName: `${userName} ${userSurname}`,
    userData: userThings
  };
}

console.log("L'utente è: " + summaryUser({ userName: "Luca", userSurname: "Bianchi", città: "Roma", età: 30 })); 