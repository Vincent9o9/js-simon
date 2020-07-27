// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.
var numAlert = [];

while (numAlert.length < 5) {
    var numeriRandom = nRandom(1,100);
    numAlert.push(numeriRandom);
}

alert(numAlert);


function nRandom(min, max) {
    return Math.floor(Math.random() * (max + min + 1) + min);
}
