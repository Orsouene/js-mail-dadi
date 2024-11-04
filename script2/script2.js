// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let randGiocatore = Math.floor(Math.random() * 6) + 1;
let randComputer = Math.floor(Math.random() * 6) + 1;
let vincitore;
console.log(randGiocatore);
console.log(randComputer);
if (randGiocatore > randComputer) {
  console.log(
    (vincitore =
      "Il vincitore di questo round è: randGiocatore con un punteggio di " +
      randGiocatore)
  );
} else if (randComputer > randGiocatore) {
  console.log(
    (vincitore =
      "Il vincitore di questo round è: randComputer con un punteggio di " +
      randComputer)
  );
} else {
  console.log("Parità in questo round");
}
