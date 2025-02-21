








function AjouterPays() {
    let inputPays = document.getElementById("ajouterPays").value.trim();
    let selectPays = document.getElementById("pays");
    //console.log(inputPays, selectPay);

    if (inputPays === "") {
        alert("Veuillez entrer un nom de pays !");
        return;
    }

    // Vérifier si le pays existe déjà dans la liste
    for (let i = 0; i < selectPays.options.length; i++) {
        if (selectPays.options[i].value.toLowerCase() === inputPays.toLowerCase()) {
            alert("Ce pays est déjà dans la liste !");
            return;
        }
    }

    // Ajouter un nouvel élément à la liste
    let newOption = document.createElement("option");
    newOption.value = inputPays;
    newOption.textContent = inputPays;
    selectPays.appendChild(newOption);
    
    // Réinitialiser le champ de saisie
    document.getElementById("ajouterPays").value = "";


}


function forme() {
    let nomPrenom = document.getElementById("nomPrenom");
    let adresse = document.getElementById("adresse");
    let noPostal = document.getElementById("noPostal");
    let localite = document.getElementById("localite");

    let erreurs = [];

    // Vérifier la taille du champ nom/prénom
    if (nomPrenom.value.length < 8 || nomPrenom.value.length > 20) {
        erreurs.push({ champ: nomPrenom, message: "Le nom et prénom doit contenir entre 8 et 20 caractères." });
    }

    // Vérifier la taille du champ adresse
    if (adresse.value.length < 20) {
        erreurs.push({ champ: adresse, message: "L'adresse doit contenir au moins 20 caractères." });
    }

    // Vérifier la valeur du champ No postal
    if (noPostal.value !== "3000" && noPostal.value !== "4000") {
        erreurs.push({ champ: noPostal, message: "Le code postal doit être 3000 ou 4000." });
    } else {
        // Mise à jour du champ localité selon la valeur du code postal
        localite.value = (noPostal.value === "3000") ? "ville1" : "ville2";
    }

    // Réinitialiser les messages d'erreur et couleurs
    document.querySelectorAll(".erreur").forEach(e => e.remove());
    document.querySelectorAll("input").forEach(input => input.style.color = "black");

    // Afficher les erreurs et changer la couleur des champs invalides
    erreurs.forEach(err => {
        let messageErreur = document.createElement("span");
        messageErreur.className = "erreur";
        messageErreur.style.color = "red";
        messageErreur.textContent = err.message;
        err.champ.style.color = "red";
        err.champ.insertAdjacentElement("afterend", messageErreur);
    });

    return erreurs.length === 0; // Renvoie true si tout est valide
}



function afficher() {
    let nomPrenom = document.getElementById("nomPrenom").value.trim();
    let adresse = document.getElementById("adresse").value.trim();
    let noPostal = document.getElementById("noPostal").value.trim();
    let localite = document.getElementById("localite").value.trim();

    let message = `Informations saisies :\n
    - Nom et prénom : ${nomPrenom}\n
    - Adresse : ${adresse}\n
    - No Postal : ${noPostal}\n
    - Localité : ${localite}\n
    - Pays : ${pays}\n
    - Plateformes : ${plateformesSelectionnees || "Aucune sélectionnée"}\n
    - Applications : ${applicationsSelectionnees || "Aucune sélectionnée"}`;

    alert(message);
 }
