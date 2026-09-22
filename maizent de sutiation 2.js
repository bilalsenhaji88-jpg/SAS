const prompt = require('prompt-sync')();

let personnages = ["bilal", "Abdelali", "Amine", "Anas", "Dalila", "Mehdi"];

let caractere = prompt("Veuillez entrer un caractère SVP :");

let noms = [];

for (let i = 0; i < personnages.length; i++) {

    for (let j = 0; j < personnages[i].length; j++) {

        if (personnages[i][j].toLowerCase() == caractere.toLowerCase()) {
            noms.push(personnages[i]);
            break;
        }
    }
}

if(noms.length>0)
console.log("Les noms :", noms);
else 
    console.log("aucun elment n'a ete trouvé")