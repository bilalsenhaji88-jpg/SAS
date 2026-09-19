const prompt = require('prompt-sync')();


let n =Number(prompt("entrer un nombre :"));

let T=[];

for(let i=0;i<n;i++){
    let VA=prompt("enter élèment svp:" , i +1 );
    T.push(VA);

}



console.log("la nouvelle tableau :\n",T);


//Le principe de ce programme est le suivant : l’utilisateur saisit le numéro d’index de sa table et le remplit. Ensuite, la même opération est effectuée pour l’ensemble de la table.