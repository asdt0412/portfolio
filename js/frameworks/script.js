const form = document.getElementById('contactForm');
const modal = document.getElementById('confirmationModal');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');
const errorMessage = document.getElementById('errorMessage');

let formData = {}; // Pour stocker les données temporaires du formulaire

// Gestion de l'envoi du formulaire
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Empeche l'envoi immédiat sans passer par la modal

    // Validation des champs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim(); // Récupérer le contenu de la zone de texte

    errorMessage.textContent = ''; // Réinitialise les erreurs

    if (!name || !email || !message) {
        errorMessage.textContent = 'Tous les champs doivent être remplis.';
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Veuillez entrer une adresse e-mail valide.';
        return;
    }

    // Stockage données et ouverture de la modal
    formData = { name, email, message };
    modal.style.display = 'flex';
});

// Gestion du bouton Confirmer
confirmButton.addEventListener('click', function () {
    modal.style.display = 'none';
    alert('Formulaire soumis avec succès !\n' +
        `Nom: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    form.reset(); // Reinitialise le formulaire
});

// Gestion du bouton Annuler
cancelButton.addEventListener('click', function () {
    modal.style.display = 'none';
});




const btns = document.querySelectorAll(".navBtn");
const cards = document.querySelectorAll(".contentPages");

btns.forEach(data => {
    const name = data.getAttribute('data-target');
    data.addEventListener('click', () => {
        cards.forEach(card => {
            if (name == card.id) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});