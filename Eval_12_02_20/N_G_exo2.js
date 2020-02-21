let catMoinsDe7cv = 46.15;
let catPlusDe7cv = 60.75;
let prix = 0;
let exempleCat=6;
let exempleAge=11;

function calculCoutCertificat(puissanceFiscale,ageVehicule) {
    let coutVignette = 0;
    if (ageVehicule<0)
        alert("L'âge du véhicule doit être supérieur à zéro");
    if (ageVehicule<10){
        if (puissanceFiscale<7){
            coutVignette = puissanceFiscale*catMoinsDe7cv;
        } else if (puissanceFiscale>7){
            coutVignette = puissanceFiscale*catPlusDe7cv;
        }
    }else if (ageVehicule>10 && ageVehicule<20){
        if (puissanceFiscale<7){
            coutVignette = (puissanceFiscale*catMoinsDe7cv)/2;
        } else if (puissanceFiscale>7){
            coutVignette = (puissanceFiscale*catPlusDe7cv)/2;
        }
    }
    // console.log(coutVignette); //m'a retourné 138.45 pendant le test
    return coutVignette;
}

calculCoutCertificat(exempleCat,exempleAge);