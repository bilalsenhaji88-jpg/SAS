const prompt = require('prompt-sync')();
let tab =[];
for(let i =0 ;i<10;i++){
    tab.push(prompt("entrer si vous plait un nombre :"))
}
function triSelection(tab) {
  for (let i = 0; i < tab.length - 1; i++) {
    let min = i;
    
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[j] < tab[min]) {
        min = j;
      }
    }
    
    if (min !== i) {
      let temp = tab[i];
      tab[i] = tab[min];
      tab[min] = temp;
    }
  }
  return tab;
}   
console.log(triSelection(tab))