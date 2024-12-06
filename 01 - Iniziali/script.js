/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const getInitials = (words) =>{
    let initials = []

    for(i = 0; i <= 5; i++){
        let firstIndex = names[i]
        initials.push(firstIndex[0].toUpperCase())
    }
    return initials
}


// Invoca la funzione qui e stampa il risultato in console
const initials = getInitials(names)
console.log(initials)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]