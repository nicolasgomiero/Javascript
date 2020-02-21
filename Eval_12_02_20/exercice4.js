mobil = new Array("Standard 2 pers", "standard 4 pers", "standard 6 pers", "Luxe 2 pers", "Luxe 4 pers", "Luxe 6 pers");
TarifsJour = new Array(30, 40, 50, 50, 60, 70);
TarifsSemaine = new Array(200, 260, 280, 280, 330, 450);
var select = document.querySelectorAll('select');


function Affichertarif(Tabmobil, Tabjours, Tabsemaine) {
    var tableau = document.querySelector('#tableau');

    for (var i = 0; i < Tabmobil.length; i++) {
        var ligne = tableau.insertRow(-1);
        var colonnemobile = ligne.insertCell(0);
        colonnemobile.innerHTML += Tabmobil[i];
        var colonnejours = ligne.insertCell(1);
        colonnejours.innerHTML += Tabjours[i];
        var colonnesemaine = ligne.insertCell(2);
        colonnesemaine.innerHTML += Tabsemaine[i];
    }
}

Affichertarif(mobil, TarifsJour, TarifsSemaine);

function calculetotal(nombreJours , type) {
    if (nombreJours < 3) {
        alert('nombre de jours minimum 3');
    } else {
        let semaine = Math.floor(nombreJours/7);
        let jours = nombreJours%7;
        let prix = jours*TarifsJour[type] + semaine*TarifsSemaine[type];
        let text = document.querySelector('#text');
        text.innerHTML = "Le prix a payer pour " + mobil[type] + " et "+ nombreJours + " jours est de : " + prix;
    }
}

n1 = document.querySelector('#calcule');
n1.addEventListener('click', function () {
    calculetotal(select[1].value , select[0].value)
});

function remplirselect() {
    for (let i = 0; i < mobil.length; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = mobil[i];
        select[0].appendChild(option);
    }
    for (let i = 0; i <= 30; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        select[1].appendChild(option);
    }
}

window.addEventListener("load", remplirselect);