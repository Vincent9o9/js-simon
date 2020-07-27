// Un alert espone 5 numeri casuali.
// Dopo la chiusura (manuale, cioè facendo click su ok) dell'alert, parte un timer di 30 secondi.
// Dopo i 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati.
var numAlert = [];
var numUtente = [];


while (numAlert.length < 5) {
    var numeriRandom = nRandom(1,100);
    if (!numAlert.includes(numeriRandom)) {
    numAlert.push(numeriRandom);
};
};

alert(numAlert);

setTimeout(nPrompt, 30000);



//****** FUNZIONI *******


function nRandom(min, max) {
    return Math.floor(Math.random() * (max + min + 1) + min);
};

function nPrompt () {
    while (numUtente.length < 5) {
        var numeroPrompt = parseInt(prompt('inserisci i cinque numeri appena visualizzati'));
        if (!numUtente.includes(numeroPrompt)) {
            numUtente.push(numeroPrompt);
        }
    }
    var nTrovato = [];
    for (var i = 0; i < numUtente.length; i++) {
        if (numAlert.includes(numUtente[i])) {
            nTrovato.push(numUtente[i]);
        }
    }
    alert('hai individuato' + nTrovato.length + 'numeri' + ' (' + nTrovato +')');
};
