//Quinto esercizio OGGETTI
let auto = {
  marca: "Fiat",
  modello: "Panda",
  anno: 2005,
  descrivi() {
    console.log(`Questa auto è una ${this.marca} ${this.modello} del ${this.anno}`);
  }
};

console.log(auto.marca);
console.log(auto.anno);

auto.descrivi();
