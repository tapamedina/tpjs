let scanf = require('scanf');
let tab = [];

console.log("Remplir le tableau d'entier");

function put(tab) {
    for(i = 0; i < 5; i++) {
        let val;
        do {
            console.log(`Veuillez saisir une valeur (indice ${i})`);
            val = scanf('%d');
        }while(val == undefined)
        tab.push(val)
    }
    console.log(tab);
}

avg = (tab) => {
    let sum = 0;
    for(i = 0; i< tab.length; i++) {
        sum+= tab[i];
    }
    return sum/tab.length;
}

put(tab);
console.log("L'indice du plus grand element est " + tab.indexOf(Math.max(...tab)));
console.log("La moyenne des entier est : " + avg(tab));