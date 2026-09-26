const prompt = require('prompt-sync')();


const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";
const bold = "\x1b[1m";
const bgBlue = "\x1b[44m";
const bgGreen = "\x1b[42m";
const bgRed = "\x1b[41m";
const bgCyan = "\x1b[46m";

let candidats = [
    {
        cin: "AB123456",
        nom: "El Otmani",
        prenom: "Saadeddine",
        partiPolitique: "pjd",
        age: 70,
        electeurs: []
    },
    {
        cin: "CD234567",
        nom: "Akhannouch",
        prenom: "Aziz",
        partiPolitique: "rni",
        age: 65,
        electeurs: ["h785434","gh452234"]
    },
    {
        cin: "EF345678",
        nom: "Benkirane",
        prenom: "Abdelilah",
        partiPolitique: "pjd",
        age: 72,
        electeurs: ["AM348723","M674563","L658723","p678342"]
    },
    {
        cin: "GH456789",
        nom: "Naciri",
        prenom: "Mohamed",
        partiPolitique: "pps",
        age: 60,
        electeurs: []
    },
    {
        cin: "AM453267",
        nom: "bilal",
        prenom: "essanhaji",
        partiPolitique: "ind",
        age: 21,
        electeurs: []
    }
];


let choix;
function main(){do {

    console.log(cyan + bold + `
========================================
 GESTION DES ÉLECTIONS - MENU PRINCIPAL
========================================` + reset);

    console.log(yellow + "1. Ajouter un nouveau candidat" + reset);
    console.log(yellow + "2. Ajouter plusieurs candidats à la fois" + reset);
    console.log(yellow + "3. Afficher la liste des candidats" + reset);
    console.log(yellow + "4. Voter pour un candidat" + reset);
    console.log(yellow + "5. Modifier les informations d'un candidat" + reset);
    console.log(yellow + "6. Supprimer un candidat" + reset);
    console.log(yellow + "7. Rechercher un candidat par nom" + reset);
    console.log(yellow + "8. Afficher les statistiques de l'élection" + reset);
    console.log(red + "9. Quitter" + reset);
    console.log(cyan + "========================================" + reset);

    choix = prompt(blue + bold + "Votre choix ?: " + reset);

    switch (choix) {

        case "1":
            ajouterCandidat();
            break;

        case "2":
            ajouterPlusieursCandidats();
            break;

        case "3":
            afficherListeCandidats();
            break;

        case "4":
            voterPourCandidat();
            break;

        case "5":
            modifierCandidat();
            break;

        case "6":
            supprimerCandidat();
            break;

        case "7":
            rechercherCandidat();
            break;

        case "8":
            statistiquesElections();
            break;

        case "9":
            console.log(green + "Au revoir !" + reset);
            break;

        default:
            console.log(red + "Choix invalide, réessayez." + reset);
    }

} while (choix !== "9");}
main();



function ajouterCandidat() { 
 
    let cin = prompt(cyan + "Veuillez saisir le numéro d'identification national CIN : " + reset); 
 
    while (verification(cin) == true) { 
        console.log(red + "Le candidat existe déjà." + reset); 
        cin = prompt(cyan + "Veuillez saisir un autre CIN : " + reset); 
    } 

    while(cin==""){
        console.log(red + "L'utilisation de l'aspirateur n'est pas autorisée. " + reset);
        console.log(yellow + "example : AB123456" + reset);
        cin = prompt(cyan + "Veuillez saisir un autre CIN : " + reset); 
    }
    
 
    let candidat = { 
        cin: cin, 
        nom: prompt(cyan + "Veuillez saisir le nom du candidat : " + reset), 
        prenom: prompt(cyan + "Veuillez saisir le prénom du candidat : " + reset), 
        partiPolitique: prompt(cyan + "Veuillez saisir le parti politique du candidat : " + reset), 
        age: Number(prompt(cyan + "Veuillez saisir l'âge du candidat : " + reset)), 
        electeurs: [] 
    }; 

    if (candidat.age < 18) {
        console.log(red + "Le candidat doit avoir 18 ans ou plus." + reset);
    
    }

   
    candidats.push(candidat); 
    console.log(green + "Le candidat a été ajouté avec succès. " + reset);
     
} 
 
function verification(cin) { 
 
    for (let i = 0; i < candidats.length; i++) { 
 
        if (candidats[i].cin == cin) { 
            return true; 
        } 
      
    } 
    return false; 
}

function ajouterPlusieursCandidats() {

    let n = Number(prompt(cyan + "Veuillez indiquer le nombre de candidats que vous souhaitez inclure : " + reset));

    for (let i = 0; i < n; i++) {

        ajouterCandidat();
    }
}


function afficherListeCandidats() {

    console.log(cyan + bold + "(1)------> Afficher tous les candidats" + reset);
    console.log(yellow + "(2)------> Trier par nombre de votes" + reset);
    console.log(magenta + "(3)------> Filtrer par parti politique" + reset);
    console.log(red + "(#)------> retour a  Menu principal........" + reset);


    let choix = prompt(blue + "Votre choix : " + reset);

    if (choix == "1") {

        for (let i = 0; i < candidats.length; i++) {

            console.log(cyan + "CIN :" + reset, candidats[i].cin);
            console.log(green + "Nom :" + reset, candidats[i].nom);
            console.log(green + "Prénom :" + reset, candidats[i].prenom);
            console.log(magenta + "Parti politique :" + reset, candidats[i].partiPolitique);
            console.log(yellow + "Âge :" + reset, candidats[i].age);
            console.log(blue + "Nombre de votes :" + reset, candidats[i].electeurs.length);
            console.log(cyan + "-------------------------" + reset);
        }

    } else if (choix == "2") {

        let candidatsTries = [];

        for (let i = 0; i < candidats.length; i++) {

            candidatsTries[i] = candidats[i];
        }

        for (let i = 0; i < candidatsTries.length - 1; i++) {

            let positionMax = i;

            for (let j = i + 1; j < candidatsTries.length; j++) {

                if (
                    candidatsTries[j].electeurs.length >
                    candidatsTries[positionMax].electeurs.length
                ) {

                    positionMax = j;
                }
            }

            if (positionMax != i) {

                let temporaire = candidatsTries[i];

                candidatsTries[i] = candidatsTries[positionMax];

                candidatsTries[positionMax] = temporaire;
            }
        }

        for (let i = 0; i < candidatsTries.length; i++) {

            console.log(cyan + "CIN :" + reset, candidatsTries[i].cin);
            console.log(green + "Nom :" + reset, candidatsTries[i].nom);
            console.log(green + "Prénom :" + reset, candidatsTries[i].prenom);
            console.log(magenta + "Parti politique :" + reset, candidatsTries[i].partiPolitique);
            console.log(yellow + "Âge :" + reset, candidatsTries[i].age);
            console.log(blue + "Nombre de votes :" + reset, candidatsTries[i].electeurs.length);
            console.log(cyan + "-------------------------" + reset);
        }

    } else if (choix == "3") {

        let parti = prompt(cyan + "Veuillez saisir le parti politique : " + reset);

        let candidatTrouve = false;

        for (let i = 0; i < candidats.length; i++) {

            if (
                candidats[i].partiPolitique.toLowerCase() ==
                parti.toLowerCase()
            ) {

                candidatTrouve = true;

                console.log(cyan + "CIN :" + reset, candidats[i].cin);
                console.log(green + "Nom :" + reset, candidats[i].nom);
                console.log(green + "Prénom :" + reset, candidats[i].prenom);
                console.log(magenta + "Parti politique :" + reset, candidats[i].partiPolitique);
                console.log(yellow + "Âge :" + reset, candidats[i].age);
                console.log(blue + "Nombre de votes :" + reset, candidats[i].electeurs.length);
                console.log(cyan + "-------------------------" + reset);
            }
        }

        if (candidatTrouve == false) {

            console.log(red + "Aucun candidat trouvé pour ce parti." + reset);
        }

    } else if(choix=="#"){
        main();
    }else {

        console.log(red + "Choix invalide." + reset);
    }
}


function voterPourCandidat() {
    for (let i = 0; i < candidats.length; i++) {
        console.log(
            cyan + "Nom du candidat : " + reset +
            candidats[i].nom +
            yellow + " | CIN : " + reset +
            candidats[i].cin
        );
    }

    let cinElecteur = prompt(cyan + "Veuillez saisir votre CIN : " + reset);
    cinElecteur = cinElecteur.trim();

    let dejaVote = false;

    for (let i = 0; i < candidats.length; i++) {

        for (let j = 0; j < candidats[i].electeurs.length; j++) {

            if (candidats[i].electeurs[j] == cinElecteur) {
                dejaVote = true;
            }
        }
    }

    if (dejaVote == true) {

        console.log(
            red +
            "Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau" +
            reset
        );

    } else {

        let cinCandidat = prompt(
            cyan + "Veuillez saisir la CIN du candidat : " + reset
        );

        cinCandidat = cinCandidat.trim();

        let candidatTrouve = false;

        for (let i = 0; i < candidats.length; i++) {

            if (candidats[i].cin == cinCandidat) {

                candidats[i].electeurs[candidats[i].electeurs.length] = cinElecteur;

                candidatTrouve = true;

                console.log(
                    green + "Votre vote a été enregistré avec succès." + reset
                );

                break;
            }
        }

        if (candidatTrouve == false) {

            console.log(
                red + "Candidat introuvable." + reset
            );
        }
    }
}


function modifierCandidat() {

    let cin = prompt(cyan + "Entrez la CIN du candidat : " + reset);

    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {

            candidatTrouve = true;

            console.log(green + "Candidat trouvé :" + reset);
            console.log("Nom :", candidats[i].nom);
            console.log("Prénom :", candidats[i].prenom);
            console.log("Parti politique :", candidats[i].partiPolitique);
            console.log("Age :", candidats[i].age);

            console.log(yellow + "(1)-----> Modifier le parti politique" + reset);
            console.log(yellow + "(2)-----> Modifier l'âge" + reset);
            console.log(red + "(#)----->retour a  Menu principal........." + reset);

            let choix = prompt(blue + "Votre choix : " + reset);

            if (choix === "1") {

                candidats[i].partiPolitique =prompt(cyan + "Entrez le nouveau parti politique : " + reset);

                console.log(green + "Modification effectuée." + reset);

            } else if (choix === "2") {

                candidats[i].age =Number(prompt(cyan + "Entrez le nouvel âge : " + reset));

                console.log(green + "Modification effectuée." + reset);
            
            }else if(choix === "#"){
                main();
            } else {

                console.log(red + "Choix invalide." + reset);
            }

            break;
        }
    }

    if (candidatTrouve === false) {

        console.log(red + "Candidat introuvable." + reset);
    }
}


function supprimerCandidat() {

    let cin = prompt(cyan + "Entrez la CIN du candidat à supprimer : " + reset);

    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {

            for (let j = i; j < candidats.length - 1; j++) {

                candidats[j] = candidats[j + 1];
            }

            candidats.length = candidats.length - 1;

            candidatTrouve = true;

            console.log(green + "Candidat supprimé avec succès." + reset);

            break;
        }
    }

    if (candidatTrouve === false) {

        console.log(red + "Candidat introuvable." + reset);
    }
}


function rechercherCandidat() {

    let nom = prompt(cyan + "Entrez le nom du candidat : " + reset);

    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].nom.toLowerCase() == nom.toLowerCase()) {

            candidatTrouve = true;

            console.log(green + "Nom :" + reset, candidats[i].nom);
            console.log(green + "Prénom :" + reset, candidats[i].prenom);
            console.log(cyan + "CIN :" + reset, candidats[i].cin);
            console.log(magenta + "Parti politique :" + reset, candidats[i].partiPolitique);
            console.log(yellow + "Age :" + reset, candidats[i].age);
            console.log(blue + "Nombre de votes :" + reset, candidats[i].electeurs.length);

            break;
        }
    }

    if (candidatTrouve === false) {

        console.log(red + "Candidat introuvable." + reset);
    }
}


function statistiquesElections() {

    console.log(cyan + bold + "(1)----> Nombre total de candidats" + reset);
    console.log(cyan + "(2)---->Nombre total de votes" + reset);
    console.log(magenta + "(3)---->Top 3 candidats" + reset);
    console.log(yellow + "(4)---->Nombre de candidats par parti" + reset);
    console.log(red + "(#)---->retour a  Menu principal............" + reset);

    let choix = prompt(blue + "Votre choix : " + reset);

    if (choix == "1") {

        console.log(
            green + 
            "Nombre total de candidats :" + 
            reset, 
            candidats.length
        );

    } else if (choix == "2") {

        let totalVotes = 0;
        for (let i = 0; i < candidats.length; i++) {

            totalVotes = totalVotes + candidats[i].electeurs.length;
        }

        console.log(
            green + 
            "Nombre total de votes :" + 
            reset, 
            totalVotes
        );

    } else if (choix == "3") {

        let candidatsTries = [];

        for (let i = 0; i < candidats.length; i++) {

            candidatsTries[i] = candidats[i];
        }

        for (let i = 0; i < candidatsTries.length - 1; i++) {

            let positionMax = i;

            for (let j = i + 1; j < candidatsTries.length; j++) {

                if (
                    candidatsTries[j].electeurs.length >
                    candidatsTries[positionMax].electeurs.length
                ) {

                    positionMax = j;
                }
            }

            if (positionMax != i) {

                let temporaire = candidatsTries[i];

                candidatsTries[i] = candidatsTries[positionMax];

                candidatsTries[positionMax] = temporaire;
            }
        }

        console.log(magenta + bold + "Top 3 candidats :" + reset);

        let limite = 3;

        if (candidatsTries.length < 3) {

            limite = candidatsTries.length;
        }

        for (let i = 0; i < limite; i++) {

            console.log(
                yellow +
                (i + 1) + "." +
                reset,
                candidatsTries[i].nom,
                candidatsTries[i].prenom,
                "-",
                blue + candidatsTries[i].electeurs.length + reset,
                "votes"
            );
        }

    } else if (choix == "4") {

        let partis = [];

        let nombres = [];

        for (let i = 0; i < candidats.length; i++) {

            let partiExiste = false;

            for (let j = 0; j < partis.length; j++) {

                if (partis[j] == candidats[i].partiPolitique) {

                    nombres[j] = nombres[j] + 1;

                    partiExiste = true;
                }
            }

            if (partiExiste == false) {

                partis[partis.length] = candidats[i].partiPolitique;
                nombres[nombres.length] = 1;
            }
        }

        console.log(cyan + bold + "Nombre de candidats par parti :" + reset);

        for (let i = 0; i < partis.length; i++) {

            console.log(
                magenta + partis[i] + reset,
                ":",
                green + nombres[i] + reset,
                "candidats"
            );
        }
    }else if(choix=="#"){
            main();
    }
     else {

        console.log(red + "Choix invalide." + reset);
    }
}
