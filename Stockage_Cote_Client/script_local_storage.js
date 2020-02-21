// Abonnements au gestionnaire d'evenements
//bouton ecriture dans le web storage
var evtEcriture = document.querySelector('#boutonEcriture');
evtEcriture.addEventListener('click',ecrireLocalStorage);
//bouton lecture dans le web storage
var evtLecture = document.querySelector('#boutonLecture');
evtLecture.addEventListener('click',lireLocalStorage);
//bouton supprimer dans le web storage
var evtSuppression = document.querySelector('#boutonSuppression');
evtSuppression.addEventListener('click',supprimerLocalStorage);

/* Fonction ecrireLocalStorage */
function ecrireLocalStorage() {
    /* Test possibilité d'utiliser localStorage et JSON */
    if ( typeof localStorage != "undefined" && JSON) {
        /* Définition d'un objet Javascript coordonneesPersonne */
        var coordonneesPersonne = {
            nom : document.getElementById("nom").value,
            prenom : document.getElementById("prenom").value,
            mail : document.getElementById("mail").value
        };
        /* Sérialisation en un objet JSON de nom identite dans le local Storage*/
        localStorage.setItem("identite", JSON.stringify(coordonneesPersonne));
        /* Affichage de contrôle */
        alert("Enregistrement dans localStorage effectué");
    }
    else
    {	/* Message d'erreur (pas de possibilité de stockage localStorage) */
        alert("localStorage n'est pas supporté");
    }
}

/* Fonction supprimerLocalStorage */
function supprimerLocalStorage() {
    /* Test possibilité d'utiliser localStorage et JSON */
    if ( typeof localStorage != "undefined" && JSON) {
        /* Suppression de l'entrée identite dans le localStorage */
        /* NB : sessionStorage.clear(); supprimerait également l'ensemble des entrées du localStorage */
        localStorage.removeItem("identite");
        /* Mise à jour des champs d'affichage (<input type="texte" ... />) */
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("mail").value = "";
        /* Affichage de contrôle */
        alert("Suppression de l'entrée identite dans le localStorage effectuée");
    }
    else {
        /* Message d'erreur (pas de possibilité	de stockage localStorage) */
        alert("localStorage n'est pas supporté");
    }
}

function lireLocalStorage()
{
    if ( typeof localStorage != "undefined" && JSON) {
        /* Désérialisation de l'objet JSON lu */
        var coordonneesPersonne = JSON.parse(localStorage.getItem("identite"));
        /* Mise à jour des champs d'affichage  (<input type="texte" ... />) */
        document.getElementById("nom").value = coordonneesPersonne.nom;
        document.getElementById("prenom").value = coordonneesPersonne.prenom;
        document.getElementById("mail").value = coordonneesPersonne.mail;
        /* Affichage de contrôle */
        alert("Lecture depuis localStorage effectuée");
    }
    else {
        /* Message d'erreur (pas de possibilité de stockage localStorage) */
        alert("localStorage n'est pas supporté");
    }

}