//Abonnement au gesionnaire d'evenements

var evtAfficher = document.querySelector('#boutAfficherHistogramme');
evtAfficher.addEventListener('click', drawChart);



/* Fonction tracerGraphe */
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Navigateur Web', 'Parts de marché en %'],
        ['IE + Edge',     7],
        ['Safari',      19],
        ['Chrome', 55],
        ['Firefox',  10],
        ['Opera',    3],
        ['Autres',    6]
    ]);

    var options = {
        title: 'Parts de marché occupées par les navigateurs actuels',
        color: ['Red', 'Green', 'Blue', 'Grey', 'Lime', 'Brown'],
        pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));

    chart.draw(data, options);
}

