var data1;
var data2;

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(Query1);
      google.charts.setOnLoadCallback(Query2);
      google.charts.setOnLoadCallback(Query3);
      google.charts.setOnLoadCallback(Query4);
      google.charts.setOnLoadCallback(Query5);
      google.charts.setOnLoadCallback(Query6);
      
      

      function Query1() {
          var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PduKVlfWBPTCRoHJ5aBmsoDqREb3_7yHww30b3Ftb-0/gviz/tq?gid=1943412440&headers=1&range=A1:C4');
          query.send(handleQueryResponse1);
        }

      function Query2() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PduKVlfWBPTCRoHJ5aBmsoDqREb3_7yHww30b3Ftb-0/gviz/tq?gid=0&headers=1&range=A1:C4');
        query.send(handleQueryResponse2);
      }

      function Query3() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PduKVlfWBPTCRoHJ5aBmsoDqREb3_7yHww30b3Ftb-0/gviz/tq?gid=1453905250&headers=1&range=A1:C4');
        query.send(handleQueryResponse3);
      }

      function Query4() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PduKVlfWBPTCRoHJ5aBmsoDqREb3_7yHww30b3Ftb-0/gviz/tq?gid=1615102264&headers=1&range=A1:C4');
        query.send(handleQueryResponse4);
      }

      function Query5() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PduKVlfWBPTCRoHJ5aBmsoDqREb3_7yHww30b3Ftb-0/gviz/tq?gid=346179718&headers=1&range=A1:C4');
        query.send(handleQueryResponse5);
      }

      function Query6() {
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1PduKVlfWBPTCRoHJ5aBmsoDqREb3_7yHww30b3Ftb-0/gviz/tq?gid=301240689&headers=1&range=A1:C4');
        query.send(handleQueryResponse6);
      }

      function handleQueryResponse1(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }

        data1 = response.getDataTable();
        drawChart1();

        };

      function handleQueryResponse2(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
  
        data2 = response.getDataTable();
        drawChart2();
  
        };
      function handleQueryResponse3(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }

        data3 = response.getDataTable();
        drawChart3();

        };
        
      function handleQueryResponse4(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
  
        data4 = response.getDataTable();
        drawChart4();
  
        };
      function handleQueryResponse5(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }

        data5 = response.getDataTable();
        drawChart5();

        };
        
      function handleQueryResponse6(response) {
        if (response.isError()) {
          alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
  
        data6 = response.getDataTable();
        drawChart6();
  
        };

      function drawChart1(){
        var options = {
          chart: {
            title: 'Interest Rates',
            subtitle: '30 year fixed interest rates: 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
      
      };
        var chart = new google.charts.Bar(document.getElementById('chart_1'));
        chart.draw(data1, google.charts.Bar.convertOptions(options));

      }

      function drawChart2(){
        var options = {
          chart: {
            title: 'Existing Home Sales',
            subtitle: 'Existing homes sold (millions): 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
      
      };
        var chart = new google.charts.Bar(document.getElementById('chart_2'));
        chart.draw(data2, google.charts.Bar.convertOptions(options));

      }
      function drawChart3(){
        var options = {
          chart: {
            title: 'Median National Home Price',
            subtitle: 'Median national home price: 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
      
      };
        var chart = new google.charts.Bar(document.getElementById('chart_3'));
        chart.draw(data3, google.charts.Bar.convertOptions(options));

      }

      function drawChart4(){
        var options = {
          chart: {
            title: 'National Housing Inventory',
            subtitle: 'Number of homes for sale (millions): 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
      
      };
        var chart = new google.charts.Bar(document.getElementById('chart_4'));
        chart.draw(data4, google.charts.Bar.convertOptions(options));

      }
      function drawChart5(){
        var options = {
          chart: {
            title: 'New Home Starts',
            subtitle: 'Number of new homes started (millions): 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
      
      };
        var chart = new google.charts.Bar(document.getElementById('chart_5'));
        chart.draw(data5, google.charts.Bar.convertOptions(options));

      }

      function drawChart6(){
        var options = {
          chart: {
            title: 'New Home Completions',
            subtitle: 'Number of new homes completed (millions): 2019 vs 2020',
          },
          series: {
            0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
            1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
          }
      
      };
        var chart = new google.charts.Bar(document.getElementById('chart_6'));
        chart.draw(data6, google.charts.Bar.convertOptions(options));

      }

   


        

        
  

      
