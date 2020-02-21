var n1 = document.querySelector('#result');
var champs = document.querySelector('#ville');
var valider = document.querySelector('#submit');
var icon = document.querySelector('#icon');
var map = document.querySelector('#map');
var meteo;
var temp = 0;

// Version asynchrone
valider.addEventListener('click', function(){
    var req = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + champs.value + ",france&lang=fr&units=metric&appid=2b74f46d419b18f5bdf26e10b2e068cb";
    req.open("GET", url);
    req.addEventListener("loadend", function() {
        if (req.status >= 200 && req.status < 400){
            meteo = req.responseText;
            var obj = JSON.parse(meteo);
            var temp = obj.main.temp;
            var ville = obj.name;
            var hum = obj.main.humidity;
            
            var url_icon = "http://openweathermap.org/img/wn/"+ obj.weather[0].icon  + "@2x.png";
            var url_map = "http://maps.openweathermap.org/maps/2.0/weather/" + {op} +"/" + {z} + "/" + {x} + "/" + {y};
            n1.innerHTML = "OpenWeatherMap : A " + ville + ", la température est de " + Math.round(temp) + " degré et l'humidité est de " + hum + " %.<br/>";
            icon.src = url_icon;

            console.log(obj.weather[0].description)
        }else { console.error(req.status + " " + req.statusText)}
    });
    req.addEventListener("error", function(){
        console.error("Erreur réseau");
    });
    req.send(null)
});
