const prompt = require('prompt-sync')();

let tab=[];
let n=[];
let j=2;

for(let i=0;i<10;i++){
    tab[i]=prompt("entrer nouvelle note si vous plait ✍️  :");
    
}
console.log(tab)
while(j==2||j==3||j==4||j==5||j==6||j==7){
        n.push(tab[j]*2);
        j++;
        
    
    }
console.log(n)




















//console.log(tab);
//for(let j =0;j<tab.length;j++){
     //if(tab[j]==tab[2]&&tab[j]==tab[3]&&tab[j]==tab[4]&&tab[j]==tab[5]&&tab[j]==tab[6]&&tab[j]==tab[7]){
       // Ntab=tab[j*2];
    //}
//}
//console.log(Ntab);

 






