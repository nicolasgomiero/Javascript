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
        pieStartAngle: 10,
        slices: {
            0: {offset: 0.01},
            1: {offset: 0.01},
            2: {offset: 0.10},
            3: {offset: 0.01},
            4: {offset: 0.01},
            5: {offset: 0.01},
        },
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

