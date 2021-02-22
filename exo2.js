let scanf = require('scanf');

console.log("Saisir un nombre !")

let nbr = scanf('%d');

function sum(nbr) {
    let sum = 0;
    for(let i = 1; i<= nbr; i++) {
        sum+= i;
    }
    return sum;
}

console.log(`La somme allant de 1 à ${nbr} est de ${sum(nbr)}`);