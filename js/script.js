google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Yin or Yang', 'Percentage of Class'],
    ['Yin', 2], ['Yang', 8]
  ]);

  var options = {
    title: 'Yin and Yang Percentage',
    legend: 'none',
    pieSliceText: 'label',
    slices: { 
    0: { color: 'black', offset: 0.2},
    1: { color: 'grey'}
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

$('#piechart').sparkleHover();

$('#piechart').sparkleHover({
  num_sprites: 15,
  lifespan: 3000,
  // radius: 500,
  sprite_size: 50,
  shape: 'circle',
  image: 'images/pigFace.jpg'

});