// Gioco dei dadi
// Generare un numero random da 1 a 6, 
// sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base 
// a chi fa il punteggio più alto.

// Genero un numero random per l'utente
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('Utente', userNumber);

// Genero un numero random per il computer
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log('Computer', computerNumber);

// Se il numero del giocatore è più grande di quello del computer 
// ha vinto il giocatore
// altrimenti se il numero del computer è più grande di quello del giocatore
// ha vinto il computer
// Altrimeni
// Pari e patta
let userMessage;
if(userNumber > computerNumber) {
    userMessage = 'Ha vinto il giocatore';
} else if(computerNumber > userNumber) {
    userMessage = 'Ha vinto il computer';
} else {
    userMessage = 'Pari e patta';
}

alert(userMessage);