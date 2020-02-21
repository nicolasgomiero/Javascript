let nodeEnfants = document.querySelector("#enfants");
let button = document.querySelector("#button");
let form = document.querySelector("#form");
let body = document.querySelector("body");


function remplirSelect(nodeSelect) {


    for (let i = 1; i <= 5; i++) {
        let newOption = document.createElement("option");
        nodeSelect.appendChild(newOption);
        let newText = document.createTextNode(i);
        newOption.appendChild(newText);
    }
}

remplirSelect(nodeEnfants);


function prenomEnfants() {

    var select = nodeEnfants.selectedIndex;
    select++;
    let labels = document.querySelectorAll('label');
    let inputs = document.querySelectorAll('input');
    let brs = document.querySelectorAll('br');

    if ((labels.length - 1) < select) {
        for (let index = labels.length - 1; index < select; index++) {

            var newLabel = document.createElement("label");
            var labelText = document.createTextNode("Enfant " + (index + 1) + " : ");
            var newInput = document.createElement("input");
            var br = document.createElement("br");

            newInput.setAttribute("type", "text");
            newInput.setAttribute("id", "enfant" + (index + 1));
            newLabel.appendChild(labelText);

            form.appendChild(br);
            form.appendChild(newLabel);
            form.appendChild(newInput);
        }
    }else {
        for (let index = labels.length - 1; index > select; index-- ){
            form.removeChild(labels[index]);
            form.removeChild(inputs[index]);
            form.removeChild(brs[index-1]);
        }
    }


}


button.addEventListener('click', prenomEnfants);

