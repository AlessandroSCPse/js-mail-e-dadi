// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di 
// chi può accedere,
// stampa un messaggio appropriato 
// sull’esito del controllo.

const emails = ['alessandro@email.it', 'michele@email.it', 'maria@email.it'];

// Al click sul login-btn
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', 
    function() {
        // Leggere la input e prendere la mail
        const userEmail = document.getElementById('user-email').value;

        // Creare la variabile flag (emailFound)
        let emailFound = false;

        // Scorro l'array di email
        for(let i = 0; i < emails.length; i++) {
            const thisEmail = emails[i];
            // Per ogni email dell'array confronto
            // se è uguale a quella data dall'utente
            // Se è uguale faccio diventare true una variabile flag (emailFound)
            if(userEmail === thisEmail) {
                emailFound = true;
            }
        }

        // Se l'email è presente nella lista stampo 'Benvenuto'
        // altrimenti stampo 'Accesso negato'
        let userMessage;
        if(emailFound === true) {
            userMessage = 'Benvenuto';
        } else {
            userMessage = 'Non hai accesso';
        }

        document.getElementById('user-message').innerHTML = userMessage;
    }
);