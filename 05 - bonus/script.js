/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const greetUserBasedOnTime = (name) =>{
    const now = new Date()
    const currentHour = now.getHours()
    let greeting

    if(currentHour <= 4){
        greeting = "Buonanotte"
    } else if (currentHour <= 13) {
        greeting = "Buongiorno"
    } else if (currentHour <= 17) {
        greeting = "Buon pomeriggio"
    } else {
        greeting = "Buonasera"
    }

    return `${greeting} ${name}`
}


// Invoca la funzione qui e stampa il risultato in console
const greetingUser = greetUserBasedOnTime(name)
console.log(greetingUser)


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.