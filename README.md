# Projet : Projet ressources 

  Ce rendu à été réalisé par Paul Lerat-Lambert et Denis Barlet correspond au projet n°2 de l'option JavaScript.

# Auteur

  * Auteur : Paul Lerat-Lambert & Barlet Denis
  * Groupe : 2

# Description Projet

## Librairies externes

### Axios

Sert pour  communiquer avec l'api : 

* Tout d'abord dans le fichier **src/plugins/axios** on le setup en donnant notament l'url de defaut ou faire les appels et la définition des headers.
* Puis dans les fichier **src/services/** on appelle axios pour définir les fonctions nécessaire a notre programme.

### BootStrap

 * **flex** ( https://getbootstrap.com/docs/4.4/utilities/flex/ ) : pour la gestion du display de la page.
 * **margin** ( https://getbootstrap.com/docs/4.4/utilities/spacing/ ) : gestion des marges.

### ReactStrap

* **Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem** ( https://reactstrap.github.io/components/navbar/ ) : Barre de navigation pour l'application principale.

### UI-Material

* **Button** ( https://material-ui.com/components/buttons/ ) : Design de boutton.
* **Chip** : ( https://material-ui.com/components/chips/ ) : Petite puce utilisé pour affiche la liste des clients dans la pages de gestion des clients.
* **Card, CardContent, CardActions** ( https://material-ui.com/components/cards/ ) : Conteneur pour certaines parties de la pages.
* **InputAdornment** ( https://material-ui.com/api/input-adornment/ ) : utilisé pour ajouter un prefix au Textfield.
* **Paper**( https://material-ui.com/components/paper/ ) : Background pour composant de la page.
* **Table, TableHead, TableRow, TableCell, TableBody** ( https://material-ui.com/components/tables/ ) : Design tableay  
* **Textfield** ( https://material-ui.com/components/text-fields/ ) : Textfield basique mais plus joli.
* **Typography** ( https://material-ui.com/components/typography/ ) : Design des écritures.

### FontAwesome

Sert pour les icones ( https://fontawesome.com/icons?d=gallery ): Eclair(bolt), goutte d'eau(tint) et gaz(fire) de la page ressource

### ChartJs

Pour réaliser le graphique des consommations des clients

### Autres 

* **Classnames** : simplifie l'usages de classnames dans les balise react
* **react-toastify** : pour afficher les messages d'erreurs liée aux appel de données 
* **react-router-dom** (withRouter, Link, Route, NavLink) : nécessaire à la NavBar

## API REST

### Ressources

* Récupération de la liste des ressources

    method: GET
    https://127.0.0.1:3000/api/resources/

* Récupération d'une ressource

    method: GET
    https://127.0.0.1:3000/api/resources/{:resId}

* Mise à jour du prix d'une ressource

    method: PUT
    body: {price: {:number}}
    https://127.0.0.1:3000/api/resources/{:resId}

### Clients

* Récupération de la liste des clients

    method: GET
    https://127.0.0.1:3000/api/customers/

* Récupération d'un client

    method: GET
    https://127.0.0.1:3000/api/customers/{:cusId}

* Création d'un client

    method: CREATE
    body: /*nouveau client qui respecte le schema*/
    https://127.0.0.1:3000/api/customers/

* Suppression d'un client

    method: DELETE
    https://127.0.0.1:3000/api/customers/{:cusId}

# Installation et utilisation du projet

    Pour pouvoir lancer le Projet, àprès avoir clone le projet, il faudra réaliser toutes les étapes suivantes dans l'ordre.

## Télechargement des packages

    $ npm install
    
## Se connecter a la base de donnée

    $ mkdir data && mongod --dbpath data

## Importer les ressources
    Une fois la base de donnée connectée lancer un nouveau terminal et executer la commande suivante :

    $ mongoimport --db dbprojet --collection resource --type csv --file ./dataCsv/prices.csv --headerline

## Crée le bundle.js
    
    Une fois l'import réaliser executer la commande suivante :
    
    $ npm run-script buld

## lancer le serveur 

    Une fois le bundle.js à jour exectuer la commande :

    $ npm start

## Se connecter au serveur

    Dans un navigateur internet se connecter à la page : http://127.0.0.1:3000/
