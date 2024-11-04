// Mail Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email

let mail = prompt("inserisci la tua mail");
//  lista Utente
let lista = [
  "orsouane@gmail.com",
  "elaouizeb@gmail.com",
  "classe136@gmail.com",
];
//  Controllo che l'utente a scritto giusto la sua mail
if (mail.includes("@") && mail.length > 0) {
  let i = 0;
  //  Controllo che l'utente sia nella lista e possa accedere
  while (i < lista.length) {
    if (lista[i] === mail) {
      console.log("sei già registrato");
      break;
    }
    i++;
  }
  //  L'utente non è nella lista e non può accedere
  if (lista[i] != mail && i === lista.length) {
    console.log("Non sei registrato, devi creare un account");
  }
}
// L'email è sbagliata o il campo è vuoto else
else {
  console.log("Controlla la tua mail");
}
