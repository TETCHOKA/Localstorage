// Fonction AjouterPays
function AjouterPays() {
    var newPays = document.getElementById("ajouterpays").value;
    var paysList = document.getElementById("pays");

    // Vérifier si le pays existe déjà dans la liste
    for (var i = 0; i < paysList.options.length; i++) {
      if (paysList.options[i].value === newPays) {
        alert("Ce pays existe déjà dans la liste.");
        return; // Ne rien faire si le pays existe déjà
      }
    }

    // Ajouter le pays à la liste déroulante
    var newOption = document.createElement("option");
    newOption.text = newPays;
    paysList.add(newOption);
    alert("Pays ajouté : " + newPays);
  }

  // Fonction VerifierFormulaire
  function VerifierFormulaire() {
    var errors = false;
    var nom = document.forms["F"]["nom"].value;
    var adresse = document.forms["F"]["adresse"].value;
    var noPostal = document.forms["F"]["no_postal"].value;
    var localite = document.getElementById("localite");

    // Vérification "Nom / Prénom"
    if (nom.length < 8 || nom.length > 20) {
      document.getElementById("T2").innerText = "Nom et prénom doivent être entre 8 et 20 caractères.";
      errors = true;
    } else {
      document.getElementById("T2").innerText = "";
    }

    // Vérification "Adresse"
    if (adresse.length < 20) {
      document.getElementById("T3").innerText = "L'adresse doit être d'au moins 20 caractères.";
      errors = true;
    } else {
      document.getElementById("T3").innerText = "";
    }

    // Vérification "No postal"
    if (noPostal !== "3000" && noPostal !== "4000") {
      document.getElementById("T4").innerText = "Code postal invalide. Doit être 3000 ou 4000.";
      errors = true;
    } else {
      // Si c'est 3000, localité devient "ville1"
      // Si c'est 4000, localité devient "ville2"
      if (noPostal === "3000") {
        localite.value = "ville1";
      } else if (noPostal === "4000") {
        localite.value = "ville2";
      }
      document.getElementById("T4").innerText = "";
    }

    // Si des erreurs sont présentes, ne pas soumettre le formulaire
    if (errors) {
      alert("Veuillez corriger les erreurs.");
    } else {
      alert("Formulaire valide.");
    }
  }




  // Fonction AfficherAlert
  
  function AfficherAlert() {
      // Vérifier si le formulaire est valide
      var nom = document.forms["F"]["nom"].value;
      var adresse = document.forms["F"]["adresse"].value;
      var noPostal = document.forms["F"]["no_postal"].value;
      var localite = document.getElementById("localite").value;

      // Vérification de la validité du formulaire
      if (nom.length < 8 || nom.length > 20 || adresse.length < 20 || (noPostal !== "3000" && noPostal !== "4000")) {
        alert("Le formulaire contient des erreurs. Veuillez vérifier les champs.");
      } else {
        // Si le formulaire est valide, afficher les valeurs dans une alerte
        var civilite = document.querySelector('input[name="civilite"]:checked') ? document.querySelector('input[name="civilite"]:checked').value : "Non spécifiée";
        var pays = document.getElementById("pays").value;
        var materiel = Array.from(document.querySelectorAll('input[name="materiel"]:checked')).map(input => input.value).join(", ");
        var applications = Array.from(document.querySelectorAll('select[name="applications"] option:checked')).map(option => option.value).join(", ");

        var message = `Formulaire soumis avec succès !\n\n` +
                      `Civilité: ${civilite}\n` +
                      `Nom / Prénom: ${nom}\n` +
                      `Adresse: ${adresse}\n` +
                      `No Postal: ${noPostal}\n` +
                      `Localité: ${localite}\n` +
                      `Pays: ${pays}\n` +
                      `Plateformes: ${materiel}\n` +
                      `Applications: ${applications}`;

        alert(message);
      }
    }




//stockage
    function enregistrerDonnees() {
        // Récupérer les valeurs des champs du formulaire
        const civilite = document.querySelector('input[name="civilite"]:checked');
        const nomPrenom = document.querySelector('input[name="nom"]').value;
        const adresse = document.querySelector('textarea[name="adresse"]').value;
        const noPostal = document.querySelector('input[name="no_postal"]').value;
        const localite = document.querySelector('input[name="localite"]').value;
        const pays = document.querySelector('select[name="pays"]').value;
        const materiel = Array.from(document.querySelectorAll('input[name="materiel"]:checked'))
                               .map(input => input.value);
        const applications = Array.from(document.querySelector('select[name="applications"]').selectedOptions)
                                   .map(option => option.value);
      
        // Vérification des champs requis (par exemple : Nom, Adresse, No postal)
        if (!civilite || !nomPrenom || !adresse || !noPostal || !localite) {
          alert("Veuillez remplir tous les champs obligatoires.");
          return;
        }
      
        // Création d'un objet pour stocker les données
        const donnees = {
          civilite: civilite.value,
          nomPrenom: nomPrenom,
          adresse: adresse,
          noPostal: noPostal,
          localite: localite,
          pays: pays,
          materiel: materiel,
          applications: applications
        };
      
        // Enregistrer les données dans le Local Storage
       var a =  localStorage.setItem('formData', JSON.stringify(donnees));
       console.log(a);
      
        // Confirmation
        alert("Les données ont été enregistrées avec succès.");
      }
      
    