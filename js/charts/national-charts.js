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
          subtitle: 'Existing Homes Sold (Millions): 2019 vs 2020',
        },
        series: {
          0: { color: '#9ab5a5' }, // Bind series 0 to an axis named 'distance'.
          1: { color: '#87CEEB' } // Bind series 1 to an axis named 'brightness'.
        }
    
    };
      var chart = new google.charts.Bar(document.getElementById('chart_2'));
      chart.draw(data2, google.charts.Bar.convertOptions(options));

    }

   


        

        
  

      
