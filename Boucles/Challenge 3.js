const prompt = require('prompt-sync')();


let n=Number(prompt("entrer un nombre :"));
let somme=0;
for(let i=1 ;i<=n;i++){
    somme=somme+n;
  
}
  console.log("la somme est : ",somme);
