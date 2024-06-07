Technologies Utilisées

Front-end: HTML5, CSS (Bootstrap), JavaScript Back-end: PHP avec PDO Base de données: MySQL pour la base de données relationnelle, MongoDB pour la base de données NoSQL Déploiement: Heroku Pré-requis

Avant de commencer, je m'assure d'avoir les éléments suivants installés sur ma machine :

Git
PHP
Composer
MySQL
MongoDB
Node.js et npm (pour gérer les dépendances front-end)

Installation

Je clone le dépôt GitHub :

sh

git clone https://github.com/username/arcadia-zoo-webapp.git cd arcadia-zoo-webapp

J'installe les dépendances back-end :

sh

composer install

J'installe les dépendances front-end :

sh

npm install

Configuration

Je configure la base de données MySQL :

Je crée une base de données MySQL.
J'importe le fichier database/schema.sql pour créer les tables nécessaires.
J'importe le fichier database/data.sql pour insérer les données initiales.

Je configure la base de données MongoDB :

Je démarre MongoDB.
La collection pour les statistiques de consultation des animaux sera créée automatiquement lors de la première utilisation.

Je configure le fichier .env :

Je crée un fichier .env à la racine du projet.
J'ajoute les configurations suivantes :

env

DB_HOST=localhost DB_NAME=arcadia_zoo DB_USER=root DB_PASS=password

MONGO_URI=mongodb://localhost:27017 MONGO_DB=arcadia_zoo

MAIL_HOST=smtp.example.com MAIL_PORT=587 MAIL_USER=no-reply@example.com MAIL_PASS=password

Lancer l'Application

Je démarre le serveur PHP :

sh

php -S localhost:8000 -t public

J'accède à l'application en ouvrant mon navigateur et en allant à l'adresse http://localhost:8000. Fonctionnalités

Visiteurs :

Accueil : Présentation du zoo, des habitats, des services et des avis des visiteurs.
Consultation des habitats et des animaux.
Soumission d'avis.

Administrateurs :

Gestion des comptes employés et vétérinaires.
Gestion des services, horaires, habitats et animaux.
Visualisation des comptes rendus vétérinaires et des statistiques de consultation.

Employés :

Validation des avis des visiteurs.
Gestion de l'alimentation des animaux.

Vétérinaires :

Remplissage des comptes rendus de santé des animaux.
Consultation de l'historique alimentaire des animaux.

Structure du Projet

kotlin

arcadia-zoo-webapp/ ├── database/ │ ├── schema.sql │ ├── data.sql ├── public/ │ ├── index.php │ ├── css/ │ ├── js/ ├── src/ │ ├── controllers/ │ ├── models/ │ ├── views/ ├── .env ├── composer.json ├── package.json ├── README.md

Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

Fork le projet.
Crée une branche pour ma fonctionnalité (git checkout -b feature/ma-fonctionnalité).
Commit mes modifications (git commit -m 'Ajout de ma fonctionnalité').
Push ma branche (git push origin feature/ma-fonctionnalité).
Ouvre une Pull Request.

User Stories (US) en Détail US 1 : Page d’Accueil

Description : La page d'accueil doit présenter le zoo avec quelques images, les différents habitats, services et animaux, ainsi que les avis des visiteurs. Critères d'acceptation :

Présentation du zoo avec au moins trois images.
Liste des habitats (savane, jungle, marais).
Liste des services offerts par le zoo.
Avis des visiteurs affichés sur la page.

US 2 : Menu de l’Application

Description : Le menu de l'application permet de naviguer facilement entre les différentes sections. Critères d'acceptation :

Lien vers la page d'accueil.
Lien vers la page des services.
Lien vers la page des habitats.
Lien de connexion pour les vétérinaires, employés et administrateurs.
Lien vers la page de contact.

US 3 : Vue Globale de Tous les Services

Description : Une page récapitulative affichant tous les services proposés par le zoo. Critères d'acceptation :

Affichage du nom et de la description de chaque service.
Possibilité de configurer les services depuis l'espace administrateur.

US 4 : Vue Globale des Habitats

Description : Une page présentant tous les habitats avec les animaux associés. Critères d'acceptation :

Affichage de tous les habitats avec image et nom.
Détail des habitats avec description et liste des animaux.
Affichage de l'état de santé des animaux et détails des visites vétérinaires.

US 5 : Avis

Description : Les visiteurs peuvent laisser des commentaires qui seront validés par les employés. Critères d'acceptation :

Formulaire pour laisser un avis avec pseudo et texte.
Système de validation par un employé avant publication sur la page d'accueil.

US 6 : Espace Administrateur

Description : Les administrateurs peuvent gérer les comptes, services, horaires, habitats, et animaux. Critères d'acceptation :

Création, mise à jour et suppression des comptes employés et vétérinaires.
Gestion des services, horaires, habitats et animaux.
Visualisation et filtrage des comptes rendus vétérinaires.
Dashboard avec statistiques de consultation des animaux.

US 7 : Espace Employé

Description : Les employés peuvent valider les avis des visiteurs et gérer la nourriture des animaux. Critères d'acceptation :

Validation et invalidation des avis.
Gestion de l'alimentation quotidienne des animaux avec date, heure, nourriture et quantité.

US 8 : Espace Vétérinaire

Description : Les vétérinaires remplissent les comptes rendus de santé des animaux et peuvent commenter sur les habitats. Critères d'acceptation :

Remplissage des comptes rendus par animal.
Ajout de commentaires sur l'état des habitats.
Visualisation de l'historique alimentaire des animaux.

US 9 : Connexion

Description : Les administrateurs, vétérinaires et employés peuvent se connecter avec un username (email) et mot de passe. Critères d'acceptation :

Formulaire de connexion sécurisé.
Accès restreint aux utilisateurs autorisés (administrateurs, vétérinaires, employés).

US 10 : Contact

Description : Les visiteurs peuvent contacter le zoo via un formulaire de contact. Critères d'acceptation :

Formulaire de contact avec titre, description et email.
Envoi de la demande par email au zoo.
Réponse possible par email depuis l'espace employé.

US 11 : Statistiques sur la Consultation des Habitats

Description : Suivi des consultations des animaux par les visiteurs. Critères d'acceptation :

Incrémentation du compteur de consultation à chaque clic sur un animal.
Stockage des données de consultation dans une base de données NoSQL.
Visualisation des statistiques dans le dashboard administrateur.

Spécifications Techniques et Sécurité

Sécurité

Utilisation de connexions HTTPS.
Hashage des mots de passe avant stockage.
Protection contre les attaques CSRF et XSS.
Validation des entrées utilisateurs pour éviter les injections SQL.

Base de Données

Relationnelle (MySQL) :
    Tables pour les utilisateurs, animaux, habitats, services, avis, rapports vétérinaires.
NoSQL (MongoDB) :
    Collection pour les statistiques de consultation des animaux.

Front-End

Utilisation de Bootstrap pour le design responsive.
JavaScript pour l'interactivité.
HTML5 et CSS pour la structure et le style.

Back-End

Utilisation de PHP avec PDO pour la gestion des interactions avec la base de données.
API RESTful pour la communication entre le front-end et le back-end.

Déploiement

Déploiement sur Heroku avec configuration appropriée pour les bases de données et les variables d'environnement.

Critères d'Acceptation pour Chaque User Story US 1 : Page d’accueil

Présence de la présentation du zoo, des images, des habitats, des services, et des avis des visiteurs.
Tester la réactivité de la page sur différentes tailles d'écran.

US 2 : Menu de l’application

Les liens du menu fonctionnent et redirigent correctement.
Accessibilité du menu sur différents appareils.

US 3 : Vue globale de tous les services

Les services sont affichés avec leur nom et description.
Configuration des services depuis l'espace administrateur.

US 4 : Vue globale des habitats

Les habitats sont affichés avec image et nom.
Les détails des habitats et des animaux s'affichent correctement au clic.
L'affichage des états de santé des animaux.

US 5 : Avis

Les visiteurs peuvent soumettre des avis et que les employés peuvent les valider/invalider.
L'affichage des avis validés sur la page d'accueil.

US 6 : Espace Administrateur

L'administrateur peut créer, mettre à jour, et supprimer les comptes, services, horaires, habitats, et animaux.
Les fonctionnalités de visualisation et de filtrage des comptes rendus vétérinaires.
Vérification du dashboard des statistiques de consultation des animaux.

US 7 : Espace Employé

Vérification que les employés peuvent valider/invalider les avis et gérer l'alimentation des animaux.
Tester la saisie de l'alimentation quotidienne avec date, heure, nourriture et quantité.

US 8 : Espace Vétérinaire

Les vétérinaires peuvent remplir les comptes rendus et commenter sur les habitats.
Visualisation de l'historique alimentaire des animaux.

US 9 : Connexion

Tester le formulaire de connexion pour les administrateurs, vétérinaires, et employés.
Les utilisateurs non autorisés ne peuvent pas se connecter.

US 10 : Contact

Le formulaire de contact fonctionne et envoie les demandes par email.
Tester la réponse aux demandes par email depuis l'espace employé.

US 11 : Statistiques sur la consultation des habitats

Assurez-vous que le compteur de consultation s'incrémente à chaque clic sur un animal.
Vérification que les données de consultation sont correctement stockées dans la base de données NoSQL.
Test de l'affichage des statistiques dans le dashboard administrateur.
Arcadia Zoo Web Application Introduction

The Arcadia Zoo Web Application is a web application designed to allow visitors to view animals, their health status, and the services offered by the zoo. The application includes specific areas for administrators, employees, and veterinarians to manage different functionalities. Here is the table of contents:

    Technologies Used
    Prerequisites
    Installation
    Configuration
    Launching the Application
    Features
    Project Structure
    Contributing
    License
    User Stories

Technologies Used

Front-end: HTML5, CSS (Bootstrap), JavaScript
Back-end: PHP with PDO
Database: MySQL for the relational database, MongoDB for the NoSQL database
Deployment: Heroku
Prerequisites

Before starting, I ensure that I have the following installed on my machine:

    Git
    PHP
    Composer
    MySQL
    MongoDB
    Node.js and npm (to manage front-end dependencies)

Installation

I clone the GitHub repository:

sh

git clone https://github.com/username/arcadia-zoo-webapp.git
cd arcadia-zoo-webapp

I install the back-end dependencies:

sh

composer install

I install the front-end dependencies:

sh

npm install

Configuration

I configure the MySQL database:

    I create a MySQL database.
    I import the database/schema.sql file to create the necessary tables.
    I import the database/data.sql file to insert the initial data.

I configure the MongoDB database:

    I start MongoDB.
    The collection for animal viewing statistics will be created automatically on first use.

I configure the .env file:

    I create a .env file at the root of the project.
    I add the following configurations:

env

DB_HOST=localhost
DB_NAME=arcadia_zoo
DB_USER=root
DB_PASS=password

MONGO_URI=mongodb://localhost:27017
MONGO_DB=arcadia_zoo

MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USER=no-reply@example.com
MAIL_PASS=password

Launching the Application

I start the PHP server:

sh

php -S localhost:8000 -t public

I access the application by opening my browser and navigating to http://localhost:8000.
Features

Visitors:

    Home: Presentation of the zoo, habitats, services, and visitor reviews.
    Viewing habitats and animals.
    Submitting reviews.

Administrators:

    Managing employee and veterinarian accounts.
    Managing services, schedules, habitats, and animals.
    Viewing veterinary reports and viewing statistics.

Employees:

    Validating visitor reviews.
    Managing animal feeding.

Veterinarians:

    Filling out animal health reports.
    Viewing animals' feeding history.

Project Structure

kotlin

arcadia-zoo-webapp/
├── database/
│   ├── schema.sql
│   ├── data.sql
├── public/
│   ├── index.php
│   ├── css/
│   ├── js/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── views/
├── .env
├── composer.json
├── package.json
├── README.md

Contributing

Contributions are welcome! To contribute:

    Fork the project.
    Create a branch for my feature (git checkout -b feature/my-feature).
    Commit my changes (git commit -m 'Add my feature').
    Push my branch (git push origin feature/my-feature).
    Open a Pull Request.

User Stories (US) in Detail
US 1: Home Page

Description: The home page should present the zoo with some images, different habitats, services, and animals, as well as visitor reviews.
Acceptance Criteria:

    Presentation of the zoo with at least three images.
    List of habitats (savannah, jungle, swamp).
    List of services offered by the zoo.
    Visitor reviews displayed on the page.

US 2: Application Menu

Description: The application menu allows easy navigation between different sections.
Acceptance Criteria:

    Link to the home page.
    Link to the services page.
    Link to the habitats page.
    Login link for veterinarians, employees, and administrators.
    Link to the contact page.

US 3: Overview of All Services

Description: A summary page displaying all the services offered by the zoo.
Acceptance Criteria:

    Display the name and description of each service.
    Ability to configure services from the admin area.

US 4: Overview of Habitats

Description: A page presenting all habitats with associated animals.
Acceptance Criteria:

    Display all habitats with image and name.
    Detail of habitats with description and list of animals.
    Display animals' health status and veterinary visit details.

US 5: Reviews

Description: Visitors can leave comments that will be validated by employees.
Acceptance Criteria:

    Form to leave a review with pseudonym and text.
    Validation system by an employee before publication on the home page.

US 6: Admin Area

Description: Administrators can manage accounts, services, schedules, habitats, and animals.
Acceptance Criteria:

    Create, update, and delete employee and veterinarian accounts.
    Manage services, schedules, habitats, and animals.
    View and filter veterinary reports.
    Dashboard with animal viewing statistics.

US 7: Employee Area

Description: Employees can validate visitor reviews and manage animal feeding.
Acceptance Criteria:

    Validate and invalidate reviews.
    Manage daily animal feeding with date, time, food, and quantity.

US 8: Veterinarian Area

Description: Veterinarians fill out animal health reports and can comment on habitats.
Acceptance Criteria:

    Fill out reports for each animal.
    Add comments on habitat conditions.
    View animals' feeding history.

US 9: Login

Description: Administrators, veterinarians, and employees can log in with a username (email) and password.
Acceptance Criteria:

    Secure login form.
    Restricted access to authorized users (administrators, veterinarians, employees).

US 10: Contact

Description: Visitors can contact the zoo via a contact form.
Acceptance Criteria:

    Contact form with title, description, and email.
    Send request by email to the zoo.
    Respond to requests by email from the employee area.

US 11: Habitat Viewing Statistics

Description: Track animal viewings by visitors.
Acceptance Criteria:

    Increment the view counter each time an animal is clicked.
    Store viewing data in a NoSQL database.
    View statistics on the admin dashboard.

Technical Specifications and Security

Security

    Use of HTTPS connections.
    Password hashing before storage.
    Protection against CSRF and XSS attacks.
    Validate user inputs to avoid SQL injections.

Database

    Relational (MySQL):
        Tables for users, animals, habitats, services, reviews, veterinary reports.
    NoSQL (MongoDB):
        Collection for animal viewing statistics.

Front-End

    Use of Bootstrap for responsive design.
    JavaScript for interactivity.
    HTML5 and CSS for structure and style.

Back-End

    Use of PHP with PDO for managing interactions with the database.
    RESTful API for communication between front-end and back-end.

Deployment

    Deployment on Heroku with appropriate configuration for databases and environment variables.

Acceptance Criteria for Each User Story
US 1: Home Page

    Ensure the presentation of the zoo, images, habitats, services, and visitor reviews.
    Test the page's responsiveness on different screen sizes.

US 2: Application Menu

    Ensure the menu links work and redirect correctly.
    Test the menu's accessibility on different devices.

US 3: Overview of All Services

    Ensure services are displayed with their name and description.
    Test service configuration from the admin area.

US 4: Overview of Habitats

    Ensure habitats are displayed with image and name.
    Test habitat and animal details display correctly on click.
    Test the display of animals' health status.

US 5: Reviews

    Ensure visitors can submit reviews and employees can validate/invalidate them.
    Test the display of validated reviews on the home page.

US 6: Admin Area

    Ensure the admin can create, update, and delete accounts, services, schedules, habitats, and animals.
    Test viewing and filtering veterinary reports.
    Verify the dashboard displays animal viewing statistics.

US 7: Employee Area

    Ensure employees can validate/invalidate reviews and manage animal feeding.
    Test daily feeding entry with date, time, food, and quantity.

US 8: Veterinarian Area

    Ensure veterinarians can fill out reports and comment on habitats.
    Verify viewing of animals' feeding history.

US 9: Login

    Test the login form for administrators, veterinarians, and employees.
    Ensure unauthorized users cannot log in.

US 10: Contact

    Ensure the contact form works and sends requests by email.
    Test responding to requests by email from the employee area.

US 11: Habitat Viewing Statistics

    Ensure the view counter increments each time an animal is clicked.
    Verify viewing data is correctly stored in the NoSQL database.
    Test the display of statistics on the admin dashboard.
