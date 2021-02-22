let scanf = require('scanf');

console.log("Entrer un mot");
let str1 = scanf('%s');
console.log("Entrer un second mot");
let str2 = scanf('%s');
/**
 * @description this function allows to determine if the first word is the double of second word
 * @param {*} str1 
 * @param {*} str2 
 * @returns a string 
 */
function isDoubleThe(str1, str2) {
    if (str1.length % str2.length == 0) return `${str1} est deux fois plus grand que ${str2}`;
    return `${str1}, le premier mot, n'est pas deux fois plus grand que ${str2} le second mot`;
}
console.log(isDoubleThe(str1, str2));
