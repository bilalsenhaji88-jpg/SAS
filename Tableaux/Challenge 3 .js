const prompt = require('prompt-sync')();

let tab = [];

let n = Number(prompt("Combien de nombres voulez-vous entrer ? "));

for(let i = 0; i < n; i++){

    let nombre = Number(prompt("Entrer un nombre : "));

    tab.push(nombre);
}

let totalTableau = tab.reduce((total, nombre) => total + nombre, 0);

console.log("Tableau :", tab);
console.log("Somme :", totalTableau);

