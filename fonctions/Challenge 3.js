const prompt = require('prompt-sync')();

let a=Number(prompt("entrer nombre 1 :"))
let b=Number(prompt("enter nombre 2 :"))

function Max(a,b){
    if(a>b){
        console.log(`${a} est max nombre .`);
        
    }
    else if(a==b){
        console.log(`les deux nombre est egale .`)
    }
    else{
        console.log(`${b} est max nombre .`)
    }
    

}
console.log(Max(a,b));
