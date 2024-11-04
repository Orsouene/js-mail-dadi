// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email

// let mail = prompt("inserisci la tua mail");
// let lista = [
//   "orsouane@gmail.com",
//   "elaouizeb@gmail.com",
//   "classe136@gmail.com",
// ];
// if (mail.includes("@") && mail.length > 0) {
//   let i = 0;

//   while (i < lista.length) {
//     if (lista[i] === mail) {
//       console.log("sei già registrato");
//       break;
//     }
//     i++;
//   }

//   if (lista[i] != mail && i == lista.length) {
//     console.log("Non sei registrato, devi creare un account");
//   }
// } else {
//   console.log("Controlla la tua mail");
// }

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
