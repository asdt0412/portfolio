# Portfolio Personnel – ECF DWWM CP1

## Bienvenue dans le projet de portfolio personnel réalisé dans le cadre de l'ECF DWWM CP1. Ce document fournit toutes les informations nécessaires pour comprendre, utiliser, et évaluer le projet.

# Table des Matières

1. Description du Projet
2. Technologies Utilisées
3. Structure du Projet
4. Installation et Compilation
5. Fonctionnalités
6. Documentation Technique
7. Conformité et Accessibilité
8. Procédure Git et Gestion de Projet
9. Critères d'Évaluation


## Description du Projet

Le portfolio met en valeur les compétences acquises en HTML, CSS/SCSS, JavaScript et d'autres outils modernes. Il comprend plusieurs pages interactives et est entièrement responsive pour s'adapter à tous les types d'écrans.

## Technologies Utilisées

* HTML5 : Structuration sémantique.

* SCSS : Gestion des styles et animations.

* JavaScript : Menu dynamique et validation de formulaire.

* GitHub : Gestion de version et collaboration.

* Outils de Minification : Sass et Terser pour CSS et JS respectivement.

## Fonctionnalités

1. Page d'Accueil : Présentation animée.
2. Page Réalisations : Liste des projets avec descriptions.
3. Page CV : Parcours académique et professionnel.
4. Formulaire de Contact : Validation client-side en JavaScript.
5. Page Mentions Légales : Obligatoire et accessible.
6. Responsiveness : Affichage optimisé pour toutes tailles d’écran.


## Documentation Technique

* Wireframes et Prototypes : Disponibles dans /docs/wireframes.
* Pseudo-code et Algorithmes : Décrits dans /docs/pseudo-code.md.
* Structure Technique : Explications détaillées dans /docs/documentation.md.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) - pour gérer les dépendances si nécessaire.
- [npm](https://www.npmjs.com/) - pour l'installation des packages.

## Installation

1. Clonez ce dépôt sur votre machine locale :
    ```bash
    git clone git@github.com:asdt0412/porfolio.git
    ```

2. Accédez au dossier du projet :
    ```bash
    cd mon-projet-web
    ```

3. Si nécessaire, installez les dépendances :
    ```bash
    npm install
    ```


## Compiler le SCSS

1. npm install -g sass


2. sass scss/style.scss css/style.css --style compressed


3. sass --watch scss/style.scss:css/style.css

## Compiler le JS

npm install -g terser

1. npm run minify-js

