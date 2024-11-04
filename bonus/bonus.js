////////// esercizio 5 bonus //////////////////////////////
// crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.
// Javascript - JS

// creazione d'un array vuto
let myArray = [];
let i = 0;

for (i = 0; i < 6; i++) {
  //   // Richiedi un numero
  let num = parseInt(prompt("Inserisci un numero"));
  //   // Controlla se il numero è dispari
  if (num % 2 !== 0) {
    myArray.push(num);
  }
}
console.log(myArray);
