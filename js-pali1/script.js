// Chiedere all'utente una parola
// Creare una funzione per capire se la parola inserita è polindroma



// Chiedere all'utente una parola:

const userWord = prompt('Inserisci una parola, sarà polindroma?');

/* Siccome chiedeva solo il prompt, non c'è bisogno di crearla

function askUserWord(message) {
    const userInput = prompt(message);
    return userInput;
}*/



// Creare una funzione per capire se la parola inserita è polindroma


// creo una variabile che mi divide la parola in unici caaratteri:

let inLettere = userWord.split('');
console.log('La parola in singole lettere è: ' + inLettere);

// senza farlo con split, ma manualmente:



let alContrario = inLettere.reverse();
console.log('La parola al contrario è: ' + alContrario);
let valid = false;

function isParolaPalindroma(poli) {
    for (i = 0; i < inLettere.length; i++) {
        if (inLettere[0] === poli[0]) {
            valid = true;
            return 'La parola è PALINDROMA!!!! ';
        }
    }
    if (poli !== inLettere) {
        valid = false;
        return 'la parola non è palindroma';
    }
}

const verify = isParolaPalindroma(userWord);
console.log(verify);