var evtAfficher = document.querySelector('#boutAfficherHistogramme');
evtAfficher.addEventListener('click', tracerNuage);
const NBPOINTS = 100;

function tracerNuage() {
    var data = new google.visualization.DataTable();
        data.addColumn('number');
        data.addColumn('number');

    for (let i=0; i<NBPOINTS;i++){
        data.addRow([Math.floor(Math.random()*100),(Math.floor(Math.random()*100))]);
    }

    var options = {
        title: 'Nuage de points',
        vAxis: {title: 'Ordonné'},
        hAxis: {title: 'Abscisse'},
        crosshair: {trigger:'both'},
    };
    let chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}