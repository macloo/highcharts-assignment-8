// Set up the chart
// Data retrieved from https://netmarketshare.com/

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Florida Population 2011-2023'
    },
    subtitle: {
        text: 'Source: united-states.reaproject.org'
    },
    xAxis: {
        categories: [
            '2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023', ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total Population',
        data: [19.3, 19.5, 19.8, 20.1, 20.5, 20.9, 21.1, 21.3, 21.6, 21.8, 22.2]

    },]
});

// Data retrieved from https://netmarketshare.com
Highcharts.chart('container2', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Florida Population Distribution of One Race Residents (2020)',
        align: 'left'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    accessibility: {
        point: {
        
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.y} '
            }
        }
    },
    series: [{
        name: 'Race',
        colorByPoint: true,
        data: [{
            name: 'White alone',
            y: 12422961,
            sliced: true,
            selected: true
        }, {
            name: 'Black or African American alone',
            y: 3246381
        },  {
            name: 'American Indian and Alaska Native alone',
            y: 94795
        }, {
            name: 'Asian alone',
            y: 643682
        }, {
            name: 'Native Hawaiian and Other Pacific Islander alone',
            y: 14014
        },  {
            name: 'Other race alone',
            y: 1564282
        },]
    }]
});
