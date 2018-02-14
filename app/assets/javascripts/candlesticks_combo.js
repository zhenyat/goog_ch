// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(
    gon.candles,
    // Treat first row as data as well.
    true);

    var options = {
      title:  'Candlesticks Sample',
      legend: 'none',
      width:  800,
      height :600,
      seriesType: "candlesticks",
//      series: { 1: {type: "line"} },
      series: { 
        1: {type: "line", color: "lightgreen"},
        2: {type: "bars", color: "lightgrey", targetAxisIndex:2}
      },
      bar: { groupWidth: '60%' }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor:  { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    };
 
  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
};
