var NomEleves = new Array("Dupont", "Durand", "Petit", "Martin", "Legrand", "Lacroix", "Legros", "Lenaim");
var Notes = new Array([10, 12, 18, 5, 9, 13, 16, 19], [13, 11, 14, 7, 14, 16, 12, 10], [9, 14, 14, 12, 8, 20, 13, 13]);
var n1 = document.querySelector('p');
//var message=" ";

//console.log(NomEleves[0]," ",Notes[0][0],Notes[1][0],Notes[2][0]);
/*for (let idE=0;idE<NomEleves.length;idE++)
{

    let chaine = NomEleves[idE] + " ";

    for (let idN=0;idN<Notes.length;idN++)
    {
        chaine=chaine + Notes[idN][idE] + " ";
    }
    message = message + chaine + "<br/>";
} */


function AfficherTab(TabNom, TabNotes)
{
    var tableau = document.querySelector('#tableau'); //on selectionne le tableau avec l'id "tableau"
    for (var i=0; i<TabNom.length;i++) // 1ère boucle pour insérer les noms dans le tableau
    {
        var ligne = tableau.insertRow(-1); // On insère une nouvelle ligne (tr) à l'indice -1 (ajoutée comme dernière ligne)
        var colonneNom = ligne.insertCell(0); // On insère une nouvelle cellule <td> dans la ligne ajoutée au dessus
        colonneNom.innerHTML += TabNom[i]; // on ajoute le nom à l'indice "i" dans la cellule crée <td> précèdement
        for (var j = 0; j< TabNotes.length;j++) // 2ème boucle pour ajouter les notes dans le tableau
        {
            var colonneNotes = ligne.insertCell(j+1); // ajout d'une cellule <td>
            colonneNotes.innerHTML += TabNotes[j][i]; // on insère la note postionnée à l'indice [j][i]
        }
    }
}
AfficherTab(NomEleves, Notes);

function CalculMoyenne(TabNom, TabNotes){
    var tableauMoyenne = document.querySelector('#tableauMoyenne');
    for (var idNoms=0; idNoms<TabNom.length; idNoms++) {
        var ligne = tableauMoyenne.insertRow(-1);
        var colonneNom = ligne.insertCell(0);
        colonneNom.innerHTML += TabNom[idNoms];
        var somme = 0;
        var colonneMoyenne = ligne.insertCell(1);
        for (n = 0; n < TabNotes.length; n++) {
            somme += TabNotes[n][idNoms];

        }
        colonneMoyenne.innerHTML = Math.round((somme / TabNotes.length) * 100) / 100;
    }

}
CalculMoyenne(NomEleves, Notes);

/*var table = document.createElement("table");
var tableBody = document.createElement("tbody");
for (let index=0; index<NomEleves.length;index++)
{
    var row = document.createElement("tr");
    for (let index2=0; index2<Notes.length;index2++)
    {
        var cell = document.createElement("td")
    }
} */


function NoteMin(TabNotes){

}
NoteMin(Notes);
function NoteMax(TabNotes) {
var tabNoteMax
}
NoteMax(Notes);