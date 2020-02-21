let chaineExemple = "test@domain.fr";
let resultat = false;

function testAdrMel(chaine) {
    let tabChaine = chaine.split('@');
    if (tabChaine.length<3){
        resultat = true;
       // console.log("OK"); //pour le test avec chaineExemple en parametre, m'a retourné "OK"
    } //else console.log("NOPE") //pour tester, ai remplacé le point par un deuxième @, résultat : "NOPE"
    return resultat;
}

testAdrMel(chaineExemple);