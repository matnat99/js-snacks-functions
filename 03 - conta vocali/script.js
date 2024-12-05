/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const countVowels = function(word){
    let vowels = "aeiou"
    let count = 0 

    for(i = 0; i < word.length; i++){
        let character = word[i]
        if (vowels.includes(character)) { 
            count += 1
        }
    }
    return count
}


// Invoca la funzione qui e stampa il risultato in console
const vowelsNumber = countVowels(word)
console.log(vowelsNumber)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)