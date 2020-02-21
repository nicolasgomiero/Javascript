let mobil = new Array("Standard 2 pers","standard4 pers","standard6 pers","Luxe2 pers","Luxe4 pers","Luxe6 pers", "Luxe 8 pers");
let Tarifs = new Array([30,200],[40,260],[50,280],[50,280],[60,330],[70,450], [80,580]);
let type = document.querySelector('#hebergement');
let sejours = document.querySelector('#jour');
let tableau = document.querySelector('#tableau');
let affichage = document.querySelector('p');
let button = document.querySelector('#but');

for (let index=0; index<mobil.length; index++) {
    let ligne = tableau.insertRow(-1);
    let colonneType = ligne.insertCell(0);
    colonneType.innerHTML = mobil[index];
    for (let j = 0; j < Tarifs[index].length; j++) {
        let colonneTarifs = ligne.insertCell(j + 1);
        colonneTarifs.innerHTML += Tarifs[index][j];
    }

}

function remplirSelect() {


    for (let i = 0; i < mobil.length; i++) {
        let newOption = document.createElement("option");
        newOption.value = i;
        newOption.innerHTML = mobil[i];
        type.appendChild(newOption);
    }
    for (let i = 0; i < 50; i++) {
        let newOption = document.createElement("option");
        newOption.value = i+1;
        newOption.innerHTML = i+1;
        sejours.appendChild(newOption);
    }

}

function calculer(){
    let types = type.value;
    let choixSejours = sejours.value;
    affichage.innerHTML = Math.floor(((choixSejours/7) * Tarifs[types][1]) + ((choixSejours % 7) * Tarifs[types][0]));
}

button.addEventListener("click", calculer);
window.addEventListener("load", remplirSelect);