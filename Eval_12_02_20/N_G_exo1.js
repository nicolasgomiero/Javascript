let convertDollar =  1.10758;
let convertSuisse = 1.09;
let convertLivre = 0.85;
let resultat = 0;
let devise = document.querySelector('#devise');
let montant = document.querySelector('#montant');
let but = document.querySelector('#but');
let n3 = document.querySelector('p');

function convertDevise(){
    if (devise.value==="Dollar"){
        resultat =  montant.value*convertDollar;
    }
    if (devise.value==="Franc-Suisse"){
        resultat =  montant.value*convertSuisse;
    }
    if (devise.value==="Livre-sterling"){
        resultat =  montant.value*convertLivre;
    }
    n3.innerHTML = "Le montant en " + devise.value + " est de : " + resultat;
}

but.addEventListener('click', convertDevise);