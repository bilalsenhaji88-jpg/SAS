const prompt = require('prompt-sync')();


let nombre=Number(prompt("entrer un nombre :"));

console.log("==================le  table de multiplication de 1 à 10==================");

for(let i = 1;i<=10 ;i++){
    let result =i * nombre;
    console.log(result);
}

console.log("==================fin de programme ==================");