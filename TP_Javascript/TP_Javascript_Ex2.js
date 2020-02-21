/ constantes */
const TAILLETABLEAU = 100;
const MIN = 1;
const MAX = 1000;
var t = new Array(TAILLETABLEAU);
var index =0; // pour se déplacer dans les différentes cases du tableau

function InitTableau(t) {
    for(index=0; index<TAILLETABLEAU; index++)
    {
    t[index] = Math.floor((Math.random() * MAX)+ MIN);
    }
}

function AffichTab(t) {
    for(index=0; index<t.length;index++)
    {
        document.write("La valeur contenue à l\'indice " + index + " est : " + t[index]+ "<br/>");
    }
}
 function TriABulle(t) {
 let borne = MAX;
 let tri = false;
 let index = 0;
        do {
            tri = true;
            for (index=0; index<borne-1; index++)
            {
                if (t[index]>t[index+1])
                {
                   let passe = t[index];
                    t[index] = t[index+1];
                    t[index+1] = passe;
                    tri = false;
                }
            }
            borne--;
        }while (tri===false);
        AffichTab(t)
 }


 InitTableau(t);
 AffichTab(t);
 document.write("<br/>");
 TriABulle(t);
