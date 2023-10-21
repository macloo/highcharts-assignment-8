Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Watermelon', 'Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Reese and Joe\'s house'
      }
    },
    series: [{
      name: 'Reese',
      data: [6, 0, 4, 2]
    }, {
      name: 'Joe',
      data: [6, 7, 3, 2]
    }]
  });
