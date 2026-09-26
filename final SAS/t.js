function voterPourCandidat() {

    console.log(cyan + bold + "\n========================================" + reset);
    console.log(cyan + bold + "          VOTER POUR UN CANDIDAT" + reset);
    console.log(cyan + bold + "========================================" + reset);

    let cinElecteur = prompt(yellow + "Veuillez saisir votre CIN : " + reset);

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
            "\nVous avez déjà voté." +
            "\nVous n'avez pas le droit de voter une deuxième fois." +
            reset
        );

    } else {

       
        console.log(cyan + bold + "\n========== LISTE DES CANDIDATS ==========" + reset);

        for (let i = 0; i < candidats.length; i++) {

            console.log(
                yellow + (i + 1) + ". " + reset +
                green + candidats[i].nom + " " + candidats[i].prenom + reset
            );

            console.log(
                magenta + "   Parti : " + reset +
                candidats[i].partiPolitique
            );

            console.log(
                blue + "   Âge : " + reset +
                candidats[i].age
            );

            console.log(cyan + "----------------------------------------" + reset);
        }
        let choix = Number(
            prompt(
                yellow +
                "Veuillez choisir le numéro du candidat : " +
                reset
            )
        );
        if (choix >= 1 && choix <= candidats.length) {

            let position = choix - 1;

            console.log(cyan + "\n========== VOTRE CHOIX ==========" + reset);

            console.log(
                green + "Nom : " + reset +
                candidats[position].nom
            );

            console.log(
                green + "Prénom : " + reset +
                candidats[position].prenom
            );

            console.log(
                magenta + "Parti : " + reset +
                candidats[position].partiPolitique
            );

            console.log(
                blue + "Âge : " + reset +
                candidats[position].age
            );
            let confirmation = prompt(
                yellow +
                "\nVoulez-vous confirmer votre vote ? (oui/non) : " +
                reset
            );

            if (confirmation.toLowerCase() == "oui") {

                candidats[position].electeurs[
                    candidats[position].electeurs.length
                ] = cinElecteur;

                console.log(
                    green +
                    "\nVotre vote a été enregistré avec succès !" +
                    reset
                );

            } else {

                console.log(
                    red +
                    "\nVote annulé." +
                    reset
                );
            }

        } else {

            console.log(
                red +
                "\nChoix invalide. Aucun vote n'a été enregistré." +
                reset
            );
        }
    }
}