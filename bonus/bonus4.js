// Calcola la somma e la media dei primi 10 numeri.
// Javascript - JS

let i = 0;
let somma = 0;
let media = 0;
for (i = 0; i <= 10; i++) {
  //   la somma dei primi 10 numeri
  somma += i;
  //   la media dei primi 10 numeri
  media = somma / 10;
}
// stampare la somma dei primi 10 numeri
console.log("la somma dei primi 10 numeri è : " + somma);
// stampare la media dei primi 10 numeri
console.log("la media dei primi 10 numeri è : " + media);
