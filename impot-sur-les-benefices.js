const taux1=15;
const taux2=28;
const taux3=31;

var n1 = document.querySelector('#ben');
var n2 = document.querySelector('#But');
var n3 = document.querySelector('p');



/*definition de la fonction */
function calculImpot()
{
    var benefices = n1.value;
    var impotsAPayer = 0;
    if (benefices<38120)
        //imposition à taux 1 (15%)
        impotsAPayer= (benefices*taux1)/100;
    else if (benefices<500000)
        //imposition à taux 2 (28%)
        impotsAPayer= (benefices*taux2)/100;
    else
        //imposition à taux 3 (31%)
        impotsAPayer= (benefices*taux3);

    n3.innerHTML = "Le montant des impôts est de : " + impotsAPayer +" euros";
}

n2.addEventListener('click', calculImpot);
/*var beneficeSaisi=parseInt(prompt("veuillez saisir le montant de vos benefices"));
document.write("votre IS sera de :",Math.round(calculImpotsSociete(beneficeSaisi,0.28)*100/100)," € <br>"); */
