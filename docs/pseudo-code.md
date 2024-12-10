# Menu dynamique Fonction

FONCTION afficherPageParId(pageId)
    POUR CHAQUE page DANS toutesLesPages
        SI id de la page EST ÉGAL À idPage ALORS
            AFFICHER la page
        SINON
            CACHER la page
        FIN SI
    FIN POUR
FIN FONCTION

paramsUrl = EXTRAIRE le paramètre 'page' de l'URL en utilisant une regex

SI paramsUrl n'est pas vide ALORS
    pageDepuisUrl = valeur du paramètre 'page'
    APPELER afficherPageParId AVEC pageDepuisUrl
SINON
    APPELER afficherPageParId AVEC 'accueil'
FIN SI

// Fonctionnalité des boutons d'accueil
POUR CHAQUE bouton DANS boutonsAccueil
    QUAND le bouton est cliqué
        urlCible = OBTENIR l'attribut 'data-href' du bouton
        SI urlCible n'est pas vide ALORS
            REDIRIGER vers urlCible
        SINON
            AFFICHER message d'erreur "Aucune redirection"
        FIN SI
    FIN QUAND
FIN POUR







# Form et Modal


const formulaire de contact
const  fenêtre modale
const bouton pour fermer la modale
const bouton pour annuler

const Creer un paragraphe pour les messages d'erreur
texte en rouge pour le p (Message d erreur)
le paragraphe (Message d erreur) en haut du formulaire

Creer une var pour stocker les données du formulaire

Cacher la fenêtre modale au démarrage ( si elle s'affiche ce qui etait le cas pour moi)


// Fonction pour valider le formulaire

    fonction validerFormulaire()
    Récupérer les valeurs des champs (nom, prénom, email, message)
    Effacer le message d'erreur précédent si on veut renvoyer le form

    Si le nom est vide ou fait plus de 50 caractères
        Afficher "Le nom est obligatoire et doit faire moins de 50 caractères."
        Retourner faux

    Si le prénom est vide ou fait plus de 20 caractères
        Afficher "Le prénom est obligatoire et doit faire moins de 20 caractères."
        Retourner faux

    Si le message est vide
        Afficher "Le message ne peut pas être vide."
        Retourner faux

    Si l'email est pas valide
        Afficher "Veuillez entrer une adresse e-mail valide."
        Retourner faux

    Si tout est valide
        Retourner vrai



// Gestion de l'envoi du formulaire

Quand le formulaire est soumis
    Empêcher l'envoi automatique du formulaire sans passer par la modal

    Si validerFormulaire() est vrai
        Récupérer les valeurs des champs
        Stocker les valeurs dans la var pour les donnée du formulaire
        Afficher la fenêtre modale de confirmation



// Gestion du bouton d'envoi de la modale
Quand le bouton de envoyer de la modale est cliqué
    Cacher la fenêtre modale
    Afficher une alerte qui indique que le form a etait envoyé avec les données du formulaire 
    reinitialiser les champs du formulaire




// Fonction pour réinitialiser le formulaire

Définir la fonction réinitialiserFormulaire()
    Cacher la fenêtre modale
    Vider tous les champs du formulaire
    Effacer le message d'erreur
    Vider la var qui stocke les donnée du formulaire



// Gestion du bouton Annuler
Quand le bouton Annuler est cliqué
    Appeler la fonction réinitialiserFormulaire()
