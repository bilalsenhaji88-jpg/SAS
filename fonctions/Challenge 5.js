const prompt = require('prompt-sync')();


let n=prompt("entrer un nombre 😊:")
let result=1
function fact(n){
    for(let i=2;i<=n;i++){
        result=i*result
      
        

    }
    return console.log("la factourielle de   " + n +"😎  est   "+result)
}
console.log(fact(n));