const prompt = require('prompt-sync')();

let chaine= prompt("entrer un chaine SVP:")

let i=0;


for(let j of chaine){
    i++;
}
console.log("la longueur c'est :",i);


