const prompt = require('prompt-sync')();

let n=Number(prompt("entrer nombre "));

fact=1;


for(let i =1; i<=n ; i++){
    fact=fact*i;
}
console.log("${n}!=",fact);

