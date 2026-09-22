const prompt = require('prompt-sync')();

let chaine=prompt("entrer un chaine SVP :")
let sous_chaine=prompt("entrer un sous-chaine SVP :")


if(chaine.includes(sous_chaine)){
    console.log("true")
}
else{
    console.log("false")
}