const prompt = require('prompt-sync')();

let a=Number(prompt("entrer nombre 1 :"))
let b=Number(prompt("enter nombre 2 :"))

function Minimum(a,b){
    if(a<b){
        console.log(`${a} est min nombre .`);
        
    }
    else if(a==b){
        console.log(`les deux nombre est egale .`)
    }
    else{
        console.log(`${b} est min nombre .`)
    }
    

}
console.log(Minimum(a,b));
