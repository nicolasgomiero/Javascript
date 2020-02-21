var tab=[
    ["Marque","Ref","Prix","Stock"],
    ["Fender","01","200","5"],
    ["Jaguar","02","1000","0"]
];

nbreLignes= tab.length;
// console.log(nbreLignes);

for(let lign=0;lign<nbreLignes;lign++)
{
    console.log(tab[lign][0])," ",tab[lign][2];
}