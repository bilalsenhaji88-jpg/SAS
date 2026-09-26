const prompt = require('prompt-sync')();

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
        electeurs: []
    },
    {
        cin: "EF345678",
        nom: "Benkirane",
        prenom: "Abdelilah",
        partiPolitique: "pjd",
        age: 72,
        electeurs: []
    },
    {
        cin: "GH456789",
        nom: "Naciri",
        prenom: "Mohamed",
        partiPolitique: "pps",
        age: 60,
        electeurs: []
    }
    ,{
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

    console.log(`
========================================
 GESTION DES ÉLECTIONS - MENU PRINCIPAL
========================================
1. Ajouter un nouveau candidat
2. Ajouter plusieurs candidats à la fois
3. Afficher la liste des candidats
4. Voter pour un candidat
5. Modifier les informations d'un candidat
6. Supprimer un candidat
7. Rechercher un candidat par nom
8. Afficher les statistiques de l'élection
9. Quitter
========================================`);

    choix = prompt("Votre choix : ");

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
            console.log("Au revoir !");
            break;

        default:
            console.log("Choix invalide, réessayez.");
    }

} while (choix !== "9");}
main();



function ajouterCandidat() { 
 
    let cin = prompt("Veuillez saisir le numéro d'identification national CIN : "); 
 
    while (verification(cin) == true) { 
        console.log("Le candidat existe déjà."); 
        cin = prompt("Veuillez saisir un autre CIN : "); 
    } 
 
    let candidat = { 
        cin: cin, 
        nom: prompt("Veuillez saisir le nom du candidat : "), 
        prenom: prompt("Veuillez saisir le prénom du candidat : "), 
        partiPolitique: prompt("Veuillez saisir le parti politique du candidat : "), 
        age: Number(prompt("Veuillez saisir l'âge du candidat : ")), 
        electeurs: [] 
    }; 

    if (candidat.age < 18) {
        console.log("Le candidat doit avoir 18 ans ou plus.");
    
    }

   
    candidats.push(candidat); 
    console.log("Le candidat a été ajouté avec succès. ");
     
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

    let n = Number(prompt("Veuillez indiquer le nombre de candidats que vous souhaitez inclure : "));

    for (let i = 0; i < n; i++) {

        ajouterCandidat();
    }
}


function afficherListeCandidats() {

    console.log("(1)------> Afficher tous les candidats");
    console.log("(2)------> Trier par nombre de votes");
    console.log("(3)------> Filtrer par parti politique");
    console.log("(#)------> retour a  Menu principal........")


    let choix = prompt("Votre choix : ");

    if (choix == "1") {

        for (let i = 0; i < candidats.length; i++) {

            console.log("CIN :", candidats[i].cin);
            console.log("Nom :", candidats[i].nom);
            console.log("Prénom :", candidats[i].prenom);
            console.log("Parti politique :", candidats[i].partiPolitique);
            console.log("Âge :", candidats[i].age);
            console.log("Nombre de votes :", candidats[i].electeurs.length);
            console.log("-------------------------");
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

            console.log("CIN :", candidatsTries[i].cin);
            console.log("Nom :", candidatsTries[i].nom);
            console.log("Prénom :", candidatsTries[i].prenom);
            console.log("Parti politique :", candidatsTries[i].partiPolitique);
            console.log("Âge :", candidatsTries[i].age);
            console.log("Nombre de votes :", candidatsTries[i].electeurs.length);
            console.log("-------------------------");
        }

    } else if (choix == "3") {

        let parti = prompt("Veuillez saisir le parti politique : ");

        let candidatTrouve = false;

        for (let i = 0; i < candidats.length; i++) {

            if (
                candidats[i].partiPolitique.toLowerCase() ==
                parti.toLowerCase()
            ) {

                candidatTrouve = true;

                console.log("CIN :", candidats[i].cin);
                console.log("Nom :", candidats[i].nom);
                console.log("Prénom :", candidats[i].prenom);
                console.log("Parti politique :", candidats[i].partiPolitique);
                console.log("Âge :", candidats[i].age);
                console.log("Nombre de votes :", candidats[i].electeurs.length);
                console.log("-------------------------");
            }
        }

        if (candidatTrouve == false) {

            console.log("Aucun candidat trouvé pour ce parti.");
        }

    } else if(choix=="#"){
        main();
    }else {

        console.log("Choix invalide.");
    }
}


function voterPourCandidat() {

    let cinElecteur = prompt("Veuillez saisir votre CIN : ");

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
            "Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau"
        );

    } else {

        let cinCandidat = prompt("Veuillez saisir la CIN du candidat : ");

        let candidatTrouve = false;

        for (let i = 0; i < candidats.length; i++) {

            if (candidats[i].cin == cinCandidat) {

                candidats[i].electeurs[candidats[i].electeurs.length] = cinElecteur;

                candidatTrouve = true;

                console.log("Votre vote a été enregistré avec succès.");
            }
        }

        if (candidatTrouve == false) {

            console.log("Candidat introuvable.");
        }
    }
}


function modifierCandidat() {

    let cin = prompt("Entrez la CIN du candidat : ");

    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {

            candidatTrouve = true;

            console.log("Candidat trouvé :");
            console.log("Nom :", candidats[i].nom);
            console.log("Prénom :", candidats[i].prenom);
            console.log("Parti politique :", candidats[i].partiPolitique);
            console.log("Age :", candidats[i].age);

            console.log("(1)-----> Modifier le parti politique");
            console.log("(2)-----> Modifier l'âge");
            console.log("(#)----->retour a  Menu principal.........")

            let choix = prompt("Votre choix : ");

            if (choix === "1") {

                candidats[i].partiPolitique =prompt("Entrez le nouveau parti politique : ");

                console.log("Modification effectuée.");

            } else if (choix === "2") {

                candidats[i].age =Number(prompt("Entrez le nouvel âge : "));

                console.log("Modification effectuée.");
            
            }else if(choix === "#"){
                main();
            } else {

                console.log("Choix invalide.");
            }

            break;
        }
    }

    if (candidatTrouve === false) {

        console.log("Candidat introuvable.");
    }
}


function supprimerCandidat() {

    let cin = prompt("Entrez la CIN du candidat à supprimer : ");

    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].cin === cin) {

            for (let j = i; j < candidats.length - 1; j++) {

                candidats[j] = candidats[j + 1];
            }

            candidats.length = candidats.length - 1;

            candidatTrouve = true;

            console.log("Candidat supprimé avec succès.");

            break;
        }
    }

    if (candidatTrouve === false) {

        console.log("Candidat introuvable.");
    }
}


function rechercherCandidat() {

    let nom = prompt("Entrez le nom du candidat : ");

    let candidatTrouve = false;

    for (let i = 0; i < candidats.length; i++) {

        if (candidats[i].nom.toLowerCase() == nom.toLowerCase()) {

            candidatTrouve = true;

            console.log("Nom :", candidats[i].nom);
            console.log("Prénom :", candidats[i].prenom);
            console.log("CIN :", candidats[i].cin);
            console.log("Parti politique :", candidats[i].partiPolitique);
            console.log("Age :", candidats[i].age);
            console.log("Nombre de votes :", candidats[i].electeurs.length);

            break;
        }
    }

    if (candidatTrouve === false) {

        console.log("Candidat introuvable.");
    }
}


function statistiquesElections() {

    console.log("(1)----> Nombre total de candidats");
    console.log("(2)---->Nombre total de votes");
    console.log("(3)---->Top 3 candidats");
    console.log("(4)---->Nombre de candidats par parti");
    console.log("(#)---->retour a  Menu principal............")

    let choix = prompt("Votre choix : ");

    if (choix == "1") {

        console.log("Nombre total de candidats :", candidats.length);

    } else if (choix == "2") {

        let totalVotes = 0;
        for (let i = 0; i < candidats.length; i++) {

            totalVotes = totalVotes + candidats[i].electeurs.length;
        }

        console.log("Nombre total de votes :", totalVotes);

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

        console.log("Top 3 candidats :");

        let limite = 3;

        if (candidatsTries.length < 3) {

            limite = candidatsTries.length;
        }

        for (let i = 0; i < limite; i++) {

            console.log(
                i + 1 + ".",
                candidatsTries[i].nom,
                candidatsTries[i].prenom,
                "-",
                candidatsTries[i].electeurs.length,
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

        console.log("Nombre de candidats par parti :");

        for (let i = 0; i < partis.length; i++) {

            console.log(partis[i], ":", nombres[i], "candidats");
        }

    } else {

        console.log("Choix invalide.");
    }
}