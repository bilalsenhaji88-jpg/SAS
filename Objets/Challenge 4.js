const prompt = require('prompt-sync')();


let x=prompt("entrer la valeur de x :")
let y=prompt("entrer la valeur de y :")

let info={
    x,
    y
}

console.log("x d'origine c'est :",info.x)
console.log("y dorijine c'est :",info.y)
info.x=prompt("entrer la nouvelle valeur de x :")
info.y=prompt("entrer la nouvelle valeur de y :")

console.log("la valeur de point :"+ info.x +" , "+ info.y )
