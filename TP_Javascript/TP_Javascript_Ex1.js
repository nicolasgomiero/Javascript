var n1 = document.querySelector('#prop');
var n2 = document.querySelector('#ButSaisi');
var n3 = document.querySelector('p');
var n4 = document.querySelector('div');
var n5 = document.querySelector('#ButPlay');

// mise en oeuvre de la boucle do while
// le but est ici de rechercher un caractere dans un chaine
// le programme indique si le caractere est présent
// ansi que le nombre d'iteration nécessaires pour le trouver
const MIN=1;
const MAX=100;
const essais=10;
/*variables*/
var index=0;
var trouve=false;
var propositions = 0;



var nbMystere = Math.random() * (MAX - MIN + 1) + MIN;
n5.style.visibility="hidden";

function rejouer() {
    window.location.reload()
}

function devinerUnNombre() {
    var nbSaisi = n1.value;

        if (nbSaisi == nbMystere) {
            trouve = true;
            propositions = nbSaisi;
        }

        if (nbSaisi > nbMystere) {
            propositions = propositions + nbSaisi + " ";
            n4.innerHTML = "Le nombre est trop grand";
            n3.innerHTML = propositions;
            index++;
        }

        if (nbSaisi < nbMystere) {
            propositions = propositions + nbSaisi + " ";
            n4.innerHTML = "le nombre est trop petit";
            n3.innerHTML = propositions;
            index++;
        }


    if (trouve === true) {
        n3.innerHTML = propositions;
        n4.innerHTML = "Bravo, vous avez trouvé le nombre !";
        n4.style.backgroundColor = 'green'
    }
    if (index>essais){
        n3.innerHTML = propositions;
        n4.innerHTML = "!!!PERDU!!!";
        n4.style.backgroundColor = 'red';
    }
}

n2.addEventListener('click', devinerUnNombre);
n2.addEventListener('click', rejouer);

