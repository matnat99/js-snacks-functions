/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
const greetUser=(userName) => `Ciao ${userName}`
    

// Invoca la funzione qui e stampa il risultato in console
const greeting = greetUser(userName)
console.log(greeting)

//Risultato atteso se si passa 'Mario': // ciao Mario
