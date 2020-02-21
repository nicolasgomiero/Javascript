let tabNom= ["Monnerat", "Valarcher", "Hernandez"];
let tabPrenom = ["Denis", "Pierre", "Luc"];
let tabEmail = ["monnerat@u-pec.fr", "valarcher@u-pec.fr", "hernadez@u-pec.fr"];
var tableau = document.querySelector('#table');

function afficherTable(nom, prenom, email){

    for (let index=0; index<nom.length; index++){

        let ligne = tableau.insertRow(-1);
        ligne.setAttribute("onclick", "removeLigne(this)");
        let colonneNom = ligne.insertCell(0);
        colonneNom.innerHTML += tabNom[index];
        let colonnePrenom = ligne.insertCell(1);
        colonnePrenom.innerHTML += tabPrenom[index];
        let colonneEmail = ligne.insertCell(2);
        colonneEmail.innerHTML += tabEmail[index];
    }
}

function removeLigne(rowLigne){
    let ligneremove = rowLigne.parentNode;
    ligneremove.removeChild(rowLigne);
}

afficherTable(tabNom,tabPrenom,tabEmail);

