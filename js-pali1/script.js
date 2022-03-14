// Chiedere all'utente una parola
// Creare una funzione per capire se la parola inserita è polindroma



// Chiedere all'utente una parola:

const userWord = askUserWord('Inserisci una parola, sarà polindroma?');


function askUserWord(message) {
    const userInput = prompt(message);
    return userInput;
}

// console.log(userWord);



// Creare una funzione per capire se la parola inserita è polindroma


// creo una variabile che mi 
let inLettere = userWord.split('');
console.log('La parola in singole lettere è: ' + inLettere);

let alContrario = inLettere.reverse();
console.log('La parola al contrario è: ' + alContrario);
let valid = false;

function isParolaPalindroma(poli) {
    for (i = 0; i < inLettere.length; i++) {
        if (poli == inLettere[i] || poli == alContrario[i]) {
            valid = true;
            return 'La parola è PALINDROMA!!!! ';
        }
        if (poli !== inLettere) {
            valid = false;
            return 'la parola non è palindroma';
        }
    }
}

const verify = isParolaPalindroma(userWord);
console.log(verify);