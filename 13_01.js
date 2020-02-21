var p1 = document.querySelector('#i1');
var p2 = document.querySelector('#But');
var p3 = document.querySelector('p');

p2.addEventListener('click', afficheBissextile);

/*
//Exemple function anonyme
    p1.onclick = function(){
    this.value = 'nouveau';
    this.style.color = 'orange';
    }
 */

//fonction calcul si année bissextile :
/**
 * @return {boolean}
 */
function IsBissextile(annee) {
    if ((annee % 4 === 0) && ((annee % 100 !== 0) || (annee % 400 === 0))) {
        return true
    } else return false
}

//fonction test
/* function test() {
    alert(p1.value) //p1.value = récupérer la valeur de l'objet p1 (ici #i1 donc l'input) et l'afficher en pop-up
    p3.innerHTML = p1.value; //récupérer la valeur de p1 et l'écrire dans p
    p3.style.color = 'orange'; //changer la couleur de p3 en orange
    p1.style.color = 'red'; //idem p1 en rouge
} */

function afficheBissextile() {
    var maDate = new Date();
    var chaine = "Les années bissextiles depuis votre naissance sont : ";

    for (var annee = parseInt(p1.value); annee<= parseInt(maDate.getFullYear()); annee++) {
        if (IsBissextile(annee) === true)
            chaine = chaine + annee + " ";
    }
    // p3 noeud du paragraphe
    p3.innerHTML = chaine;
}




