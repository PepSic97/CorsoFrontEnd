// Esercizio B2
function show({ studentName, studentGrade }) {
  return `Lo studente ${studentName} ha avuto come voto ${studentGrade}`;
}

const student = { studentName: "Marco", studentGrade: 28 };
console.log(show(student));
