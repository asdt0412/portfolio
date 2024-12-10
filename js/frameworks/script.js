// Fonction pour afficher la page correspondante en fonction de l'ID
function showPageById(pageId) {
    const pages = document.querySelectorAll('.contentPages');
    pages.forEach(page => {
      // On affiche la page si son ID correspond à 'pageId', sinon on la cache
      if (page.id === pageId) {
        page.style.display = 'block';  // Affiche la page qui correspond
      } else {
        page.style.display = 'none';  
      }
    });
  }
  
  // Extrait le parametre contentPages de l'url grace a une regex
  const urlParams = window.location.search.match(/[?&]page=([^&]+)/);
  
  
  if (urlParams && urlParams[1]) {
    const pageFromUrl = urlParams[1];  // La valeur du paramètre = contentPages
    showPageById(pageFromUrl);  // Afficher la page qui correspond
  } else {
    // Si aucune page n'est trouvé on affiche par défaut la page Accueil
    showPageById('accueil');
  }




// Boutton Accueil pour la redirection de page //
document.querySelectorAll('.homeButton').forEach(button => {
    button.addEventListener('click', (event) => {
        // Récupère la valeur de l'attribut data-href
        const targetURL = button.getAttribute('data-href');
        if (targetURL) {
            window.location.href = targetURL; // Redirige vers l'URL spécifiée
        } else {
            console.error("Aucune redirection");
        }
    });
});






const form = document.querySelector(".contact-form");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");
const errorMessage = document.createElement("p"); // Crée un paragraphe pour afficher les erreurs
errorMessage.style.color = "red"; // Style pour le texte des erreurs
form.prepend(errorMessage); // Message d'erreur en haut du formulaire qui s'affiche en haut du formulaire

let formData = {}; // Pour stocker les données du formulaire

// Empêche l'affichage initial de la modale
modal.style.display = "none";

// Fonction de validation des champs
function validateForm() {
    // Récupère les valeurs des champs
    const name = document.getElementById("name").value.trim();
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Réinitialise le message d'erreur au moment de l'envoie
    errorMessage.textContent = "";

    // Validation du champ "nom" ne doit pas être vide et ne doit pas dépasser 50 caractères
    if (!name || name.length > 50) {
        errorMessage.textContent = "Le nom est obligatoire et doit faire moins de 50 caractères.";
        return false; // Validation échouée
    }
    // Validation du champ "prenom" ne doit pas être vide et ne doit pas dépasser 20 caractères
    if (!firstName || firstName.length > 20) {
        errorMessage.textContent = "Le prenom est obligatoire et doit faire moins de 20 caractères.";
        return false; // Validation échouée
    }

    // Validation du champ "message" ne doit pas être vide
    if (!message) {
        errorMessage.textContent = "Le message ne peut pas être vide.";
        return false; // Validation échouée
    }

    // Vérification de la validité de l'adresse e-mail avec une regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
        return false; // Validation échouée
    }

    // Si tout est valide, retourne vrai
    return true;
}

// Gestion de l'envoi du formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empeche l'envoi immédiat du formulaire

    // Validation des données
    if (validateForm()) {
        // Si la validation réussie, les données sont stocké et on affiche la modale
        const name = document.getElementById("name").value.trim();
        const firstName = document.getElementById("firstName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        formData = { name, firstName, email, message };

        // Affichage de la modale de confirmation
        modal.style.display = "flex";
    }
});

// Gestion du bouton de fermeture de la modale
closeModalButton.addEventListener("click", function () {
    modal.style.display = "none"; // Cache la modale

    // Affiche le message de confirmation
    alert("Formulaire envoyé avec succès !\n" +
        `Nom: ${formData.name}\nPrenom: ${formData.firstName}\nEmail: ${formData.email}\nMessage: ${formData.message}`);

    // Reset le formulaire
    form.reset();

});


// Fonction de reset pour le boutton annuler 
function resetForm() {

    // Cache la modale si elle est affichée
    modal.style.display = "none";

    // Reset les valeurs des champs du formulaire
    form.reset();

    // Resetles messages d'erreur
    errorMessage.textContent = "";

    // Supprime les données de formulaire
    formData = {};
}

// Le boutton Annuler reset le formulaire quand il est clické
const cancelButton = document.getElementById("cancel-btn");

cancelButton.addEventListener("click", resetForm);

