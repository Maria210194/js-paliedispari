// Utente sceglie pari o dispari
// L'utente inserisce un numero da 1 a 5 
// Generiamo, con una funzione, un numero random da 1 a 5 per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto



/*  L'opzione button non funziona bene, parte prima prompt e solo dopo posso cliccare!

let sceltaGiocatore;
const buttonPari = document.getElementById('buttonPari');
const buttonDispari = document.getElementById('buttonDispari');
let sceltaPari = false;
let sceltaDispari = false;

buttonPari.addEventListener('click', function () {
    /*if (sceltaGiocatore = buttonPari) {
    }
    sceltaPari = true;
    console.log('Ha scelto pari');
});

buttonDispari.addEventListener('click', function () {

    if (sceltaGiocatore = buttonDispari) {

        console.log('Ha scelto dispari');

    }
    
});
*/




// Utente sceglie pari o dispari

let sceltaGiocatore;
do {
    sceltaGiocatore = prompt('Punta su pari o dispari');
} while
    (sceltaGiocatore !== 'pari' && sceltaGiocatore !== 'dispari');

console.log('Hai scelto: ', sceltaGiocatore);


// L'utente inserisce un numero da 1 a 5 

const numeroDelGiocatore = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Il numero che hai scelto è: ', numeroDelGiocatore)



// Generiamo, con una funzione, un numero random da 1 a 5 per il computer

function numeroRandomPC(min, max) {

    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;

}

numeroEstrattoPc = numeroRandomPC(1, 5);
console.log('Il numero estratto per il PC è: ' + numeroEstrattoPc);


// Sommiamo i due numeri

let sum = 0;
sum += numeroEstrattoPc + numeroDelGiocatore;
console.log('La somma dei due numeri è: ' + sum);


// Stabiliamo se la somma dei due numeri è pari o dispari

function sommaPariODispari(somma) {

    if (somma % 2 === 0) {
        return 'pari';
    }
    else {
        return 'dispari';
    }
}


let verdetto = sommaPariODispari(sum);
console.log('La SOMMA dei numeri è: ' + verdetto);


// Dichiariamo chi ha vinto

if (sceltaGiocatore == 'pari' && verdetto == 'pari') {
    console.log('Hai vintooooo!');
} else if (sceltaGiocatore === 'dispari' && verdetto === 'dispari') {
    console.log('Hai vintooooo!');
} else {
    console.log('Questa volta è andata male!');
}







