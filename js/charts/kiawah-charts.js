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
          ['Jan', 9, 6],
          ['Feb', 1, 5],
          ['Mar', 3, 3]
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
          ['Apr', 9, 6],
          ['May', 13, 13],
          ['Jun', 6, 20]
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
          ['Jan', 109, 109],
          ['Feb', 118, 118],
          ['Mar', 129, 118]
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
          ['Apr', 142, 106],
          ['May', 143, 102],
          ['Jun', 151, 95]
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