//Abonnement au gesionnaire d'evenements

var evtAfficher = document.querySelector('#boutAfficherHistogramme');
evtAfficher.addEventListener('click', drawChart);



/* Fonction tracerGraphe */
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Navigateur Web', 'Parts de marché en %'],
        ['IE + Edge',     7],
        ['Safari',      19],
        ['Firefox',  10],
        ['Chrome', 55],
        ['Opera',    3],
        ['Autres',    6]
    ]);

    var options = {
        width: 600, height: 240,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

    chart.draw(data, options);

    setInterval(function() {
        data.setValue(0, 1, 7 + Math.round(2 * Math.random()));
        chart.draw(data, options);
    }, 5000);
}