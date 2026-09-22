
let student = {
    nom: "bilal",
    prenom: "essanhaji",
    notes: [18, 19, 17, 18, 16.6]
};


console.log("student" +student.prenom + " " +student.nom);


console.log("Liste des notes : " + student.notes.join(" & "));


let somme = 0;
for (let note of student.notes) {
    somme += note;
}
let moyenne = somme / student.notes.length;
console.log("Moyenne :", moyenne);