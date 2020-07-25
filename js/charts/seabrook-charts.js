google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);
      google.charts.setOnLoadCallback(drawTable2);
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart1);
      google.charts.setOnLoadCallback(drawChart2);
      google.charts.setOnLoadCallback(drawChart3);
      google.charts.setOnLoadCallback(drawChart4);
      google.charts.setOnLoadCallback(drawChart5);
      google.charts.setOnLoadCallback(drawChart6);
      google.charts.setOnLoadCallback(drawChart7);
      google.charts.setOnLoadCallback(drawChart8);





      function drawTable() {

  
        var query = new google.visualization.Query(
            'https://docs.google.com/spreadsheets/d/1nm9iOmhZnO70o5Nj1wzyzqqgdlD9qeoUaD8eMzi6blY/gviz/tq?range=A1:I23');
        query.send(handleQueryResponse);
      }
  
      function handleQueryResponse(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }

        var cssClassNames = {headerRow: 'mdc-data-table__header-row', tableRow: 'mdc-data-table__row', oddTableRow: 'mdc-data-table__row', selectedTableRow: 'mdc-data-table__row', hoverTableRow: 'mdc-data-table__row', headerCell: 'mdc-data-table__header-cell', tableCell: 'mdc-data-table__cell'};
        var data = response.getDataTable();
        var table = new google.visualization.Table(document.getElementById('table_div'));
        table.draw(data,{showRowNumber: false, width: '100%', height: '100%', cssClassNames: cssClassNames});
        
      }

      

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Month', '2019', '2020'],
          ['Jan', 6, 6,],
          ['Feb', 7, 13],
          ['Mar', 14, 29]
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
          ['Apr', 18, 12],
          ['May', 24, 11],
          ['Jun', 18, 22]
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
          ['Jan', 156, 135],
          ['Feb', 162, 130],
          ['Mar', 177, 138]
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
          ['Apr', 177, 129],
          ['May', 182, 112],
          ['Jun', 179, 82]
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

      function drawTable2() {
        var cssClassNames = {headerRow: 'mdc-data-table__header-row', tableRow: 'mdc-data-table__row', oddTableRow: 'mdc-data-table__row', selectedTableRow: 'mdc-data-table__row', hoverTableRow: 'mdc-data-table__row', headerCell: 'mdc-data-table__header-cell', tableCell: 'mdc-data-table__cell'};
        
        var data = new google.visualization.DataTable();
        
        data.addColumn('string', 'Address');
        data.addColumn('number', 'Price');
        data.addColumn('number', 'Size');
        data.addColumn('number', 'Price/Size');
        data.addColumn('number', 'Beds');
        data.addColumn('number', 'Baths');
        data.addColumn('number', 'Days on Market');
        data.addRows([
          ['1490 Hindman Ave',{v: 10000, f: '$10,000'},{v: 10000},{v: 5, f: '$5'},{v: 5},{v: 2}, {v: 100} ]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div_2'));

        table.draw(data,{showRowNumber: false, width: '100%', height: '100%', cssClassNames: cssClassNames});
      }