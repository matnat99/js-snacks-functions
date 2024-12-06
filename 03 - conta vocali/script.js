/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVowels = (words) =>{
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0 

    for(i = 0; i < word.length; i++){
        const character = word[i]
        if (vowels.includes(character)) { 
            count++
        }
    }
    return count
}


// Invoca la funzione qui e stampa il risultato in console
const vowelsNumber = countVowels(word)
console.log(vowelsNumber)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)