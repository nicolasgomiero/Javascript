let image = document.querySelector('img');
let button = document.querySelector('#button');


function changementImage(){
    if (image.src === "bootstrap-seeklogo.com.svg"){
        image.src = "bootstrap-seeklogo.com_(2).svg";
    } else
    if (image.src === "bootstrap-seeklogo.com_(2).svg"){
        image.src = "bootstrap-seeklogo.com.svg";
    }

}

button.addEventListener('click', changementImage);