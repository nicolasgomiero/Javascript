let coefMoins15k = 0.05;
let coef15k30k = 0.12;
let coefSup30k = 0.2;
let impot = 0;
let impotFoyer =0;

let n1 = document.querySelector('#revenus');
let button = document.querySelector('#button');
let n3 = document.querySelector('p');
let revenus = n1.value;

function calculIR(revenu, personnes) {
    if (revenu<5000){
        impot = (revenu*coefMoins15k);
    }
    if ((revenu>15000) && (revenu<30000)){
        impot = (revenu*coef15k30k);
    }
    if (revenu>30000){
        impot = (revenu*coefSup30k);
    }
    impotFoyer = (impot/personnes);
    n3.innerHTML= impotFoyer;
}

button.addEventListener('click', calculIR(revenus, 1));