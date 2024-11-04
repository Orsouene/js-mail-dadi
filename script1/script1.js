// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email

let mail = prompt("inserisci la tua mail");
let lista = [
  "orsouane@gmail.com",
  "elaouizeb@gmail.com",
  "classe136@gmail.com",
];
if (mail.includes("@") && mail.length > 0) {
  let i = 0;

  while (i < lista.length) {
    if (lista[i] === mail) {
      console.log("sei già registrato");
      break;
    }
    i++;
  }

  if (lista[i] != mail && i === lista.length) {
    console.log("Non sei registrato, devi creare un account");
  }
} else {
  console.log("Controlla la tua mail");
}
