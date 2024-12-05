/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
const letter = "A"

function filterInitialLetter(names,letter){
    let initialNameA = []

    for(i = 0; i < names.length; i++){
        let name = names[i]
        if(name[0] === letter){
            initialNameA.push(name)
        }
    }
    return initialNameA
}


// Invoca la funzione qui e stampa il risultato in console
const initialNameA = filterInitialLetter(names,letter)
console.log(initialNameA)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]