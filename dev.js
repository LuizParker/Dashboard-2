var options = {
    chart: {
      height: 200,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
    series: [
      
      {
        name: 'Column A',
        type: 'column',
        data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
      },
      {
        name: "Column B",
        type: 'column',
        data: [10, 19, 27, 26, 34, 35, 40, 38]
      },
      {
        name: "Line C",
        type: 'line',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
      },
    ],
    stroke: {
      width: [4, 4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
    },
    yaxis: [
      {
        seriesName: 'Column A',
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Columns"
        }
      },
      {
        seriesName: 'Column A',
        show: false
      }, {
        opposite: true,
        seriesName: 'Line C',
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: "Line"
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();


  
      
  var options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2011',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2012',
          y: 4432,
          goals: [
            {
              name: 'Expected',
              value: 5400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2013',
          y: 5423,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2014',
          y: 6653,
          goals: [
            {
              name: 'Expected',
              value: 6500,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2015',
          y: 8133,
          goals: [
            {
              name: 'Expected',
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2016',
          y: 7132,
          goals: [
            {
              name: 'Expected',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2017',
          y: 7332,
          goals: [
            {
              name: 'Expected',
              value: 8700,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '2018',
          y: 6553,
          goals: [
            {
              name: 'Expected',
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0'
            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 200,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart-2"), options);
  chart.render();