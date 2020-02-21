 let nom = new Array("Pierre","Paul","Jacques","David");
let taille = new Array(171,165,190,181);
let poids = new Array(90,60,110,86);
let IMC = new Array(30.8,22,30.5,26.3);

function afficherTab(tabNom, tabTaille, tabPoids, tabIMC ){
    let tableau = document.querySelector('#tableau');
    for (let index=0; index<tableau.length; index++){
        let ligne = tableau.insertRow(-1);
        let colonneNom = ligne.insertCell(0);
        colonneNom.innerHTML += tabNom[index];
        let colonneTaille = ligne.insertCell(1);
        colonneTaille.innerHTML += tabTaille[index];
        let colonnePoids = ligne.insertCell(2);
        colonnePoids.innerHTML += tabPoids[index];
        let colonneIMC = ligne.insertCell(3);
        let IMC = Math.round((tabPoids[index]/(tabTaille[index]*tabTaille[index]))*10000);
        colonneIMC.innerHTML += IMC;
    }
    if ()
}

afficherTab(nom,taille,poids,IMC);

//let tab = new Array();
//tab['noms']=('Pierre','Paul','Jacques','David');
//tab['taille']=(171,165,190,181);