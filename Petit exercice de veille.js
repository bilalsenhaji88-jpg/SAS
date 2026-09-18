const prompt = require('prompt-sync')();


let nom = prompt("Entrez votre nom :");
let age = Number(prompt("Entrez votre âge :"));
console.log("Type du nom :", typeof nom);
console.log("Type de l'âge :", typeof age);
let ageDans10Ans = age + 10;
console.log("Dans 10 ans, vous aurez :", ageDans10Ans, "ans");
let majeur = age >= 18;
console.log("Majeur :", majeur);
if (majeur) {
    console.log("Bonjour " + nom + ", vous êtes majeur.");
} else {
    console.log("Bonjour " + nom + ", vous êtes mineur.");
}