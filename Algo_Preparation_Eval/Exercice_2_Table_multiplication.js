let nb = parseInt(prompt("Saisir la valeur"));
let n1 = document.querySelector('p');

function multiplication(nombre){
    document.write("Table de " + nombre + "</br>");
    for (let i=0; i<10;i++){
        document.write(i + " X " + nombre + " = " + (i*nombre) + "</br>");
    }

}

n1.innerHTML = multiplication(nb);