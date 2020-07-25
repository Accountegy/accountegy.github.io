google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);
      google.charts.setOnLoadCallback(drawChart3);
      google.charts.setOnLoadCallback(drawChart4);
      google.charts.setOnLoadCallback(drawChart5);
      google.charts.setOnLoadCallback(drawChart6);
      google.charts.setOnLoadCallback(drawChart7);
      google.charts.setOnLoadCallback(drawChart8);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Jan', 953, 1162],
          ['Feb', 1248, 1316],
          ['Mar', 1578, 1683]
        ]);
        
        var options = {
            chart: {
              title: 'Q1 Closed Residential Sales',
              subtitle: 'Number of Homes Sold: 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_1'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Apr', 1608, 1448],
          ['May', 1906, 1406],
          ['Jun', 1933, 2036]
        ]);

        var options = {
          chart: {
            title: 'Q2 Closed Residential Sales',
            subtitle: 'Number of Homes Sold: 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Jan', 5943, 5352],
          ['Feb', 6087, 5228],
          ['Mar', 6298, 5366]
        ]);

        var options = {
            chart: {
              title: 'Q1 Inventory',
              subtitle: 'Listings at the end of the month 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Apr', 6392, 5144],
          ['May', 6493, 4457],
          ['Jun', 6399, 4091]
        ]);

        var options = {
            chart: {
              title: 'Q2 Inventory',
              subtitle: 'Listings at the end of the month: 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart5() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Jan', 266000, 287773],
          ['Feb', 266315, 294528],
          ['Mar', 275810, 287000]
        ]);

        var options = {
            chart: {
              title: 'Q1 Median Sales Price',
              subtitle: 'Median closed home sales price: 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_5'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart6() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Apr', 270713, 290000],
          ['May', 285000, 287915],
          ['Jun', 289850, 288000]
        ]);

        var options = {
            chart: {
              title: 'Q2 Median Sales Price',
              subtitle: 'Median closed home sales price: 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_6'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart7() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Jan', 62, 57],
          ['Feb', 62, 69],
          ['Mar', 59, 62]
        
    ]);

        var options = {
            chart: {
              title: 'Q1 Average Days on Market',
              subtitle: 'Average days homes listed until sold: 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_7'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

      function drawChart8() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Apr', 51, 53],
          ['May', 52, 52],
          ['Jun', 52, 51]
        ]);

        var options = {
            chart: {
              title: 'Q2 Average Days on Market',
              subtitle: 'Average days homes listed until sold: 2019 vs 2020',
            },
            series: {
              0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
              1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
            }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material_8'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }