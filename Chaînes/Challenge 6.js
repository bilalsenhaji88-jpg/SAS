const prompt = require('prompt-sync')();

let chaine1=prompt("entrer un chaine :")
let chaine2=prompt("entrer un caractére :")
let comptur=0;
for(let i=0 ;i<chaine1.length;i++){
    if(chaine2==chaine1[i]){
        comptur+=1;
    }
}
console.log("le nombre de élement :",comptur);