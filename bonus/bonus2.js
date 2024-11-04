////////// esercizio 6 bonus //////////////////////////////
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.
// Javascript - JS

// Richiedi un numero

let n = parseInt(prompt("inserisci un numero"));
// // Fare il calcolo sul numero inserito e stamparlo.
while (!isNaN(n) && n !== 0) {
  console.log(Math.pow(n, 3));
  n--;
}
