const prompt = require('prompt-sync')();


let chaine =prompt("svp entrer un chaine :")
let tmr="";

for(let i= chaine.length-1;i>=0;i--){
    tmr=tmr+chaine[i];
   
}
 console.log(tmr)
