import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

export default function charts() {
    const data = [
        [1317888000000, 372.5101, 375, 372.2, 372.52],
        [1317888060000, 372.4, 373, 372.01, 372.16],
        [1317888120000, 372.16, 372.4, 371.39, 371.62],
        [1317888180000, 371.62, 372.16, 371.55, 371.75],
        [1317888240000, 371.75, 372.4, 371.57, 372],
        [1317888300000, 372, 372.3, 371.8, 372.24],
        [1317888360000, 372.22, 372.45, 372.22, 372.3],
        [1317888420000, 372.3, 373.25, 372.3, 373.15],
        [1317888480000, 373.01, 373.5, 373, 373.24],
        [1317888540000, 373.36, 373.88, 373.19, 373.88],
        [1317888600000, 373.8, 374.34, 373.75, 374.29],
        [1317888660000, 374.29, 374.43, 374, 374.01],
        [1317888720000, 374.05, 374.35, 373.76, 374.35],
        [1317888780000, 374.41, 375.24, 374.37, 374.9],
        [1317888840000, 374.83, 375.73, 374.81, 374.96],
        [1317888900000, 374.81, 375.4, 374.81, 375.25],
        [1317888960000, 375.2, 375.7, 375.14, 375.19],
        [1317889020000, 375.43, 375.43, 374.75, 374.76],
        [1317889080000, 374.94, 375.5, 374.81, 375.13],
        [1317889140000, 375.12, 375.48, 375, 375.04],
        [1317889200000, 375.24, 375.24, 375, 375.08],
        [1317889260000, 375.16, 375.16, 374.51, 374.51],
        [1317889320000, 374.51, 374.75, 374.2, 374.27],
        [1317889380000, 374.22, 374.55, 373.83, 374.55],
        [1317889440000, 374.69, 374.86, 374.01, 374.2],
        [1317889500000, 374.32, 374.65, 374.31, 374.51],
        [1317889560000, 374.65, 375.12, 374.51, 375.12],
        [1317889620000, 375.13, 375.25, 374.83, 375.22],
        [1317889680000, 375.16, 375.22, 375, 375],
        [1317889740000, 375, 375, 374.66, 374.8],
        [1317889800000, 374.88, 375, 374.5, 374.85],
        [1317889860000, 374.41, 374.67, 374.25, 374.67],
        [1317889920000, 374.5, 374.75, 374.27, 374.42],
        [1317889980000, 374.4, 374.93, 374.38, 374.85],
        [1317890040000, 374.86, 375.3, 374.8, 375.09],
        [1317890100000, 375, 375.18, 374.9, 375.02],
        [1317890160000, 375.02, 375.08, 374.86, 374.87],
        [1317890220000, 374.93, 375.75, 374.93, 375.75],
        [1317890280000, 375.75, 376.5, 375.75, 376.31],
        [1317890340000, 376.31, 377.2, 376.19, 377.04],
        [1317890400000, 377.2, 377.33, 376.45, 376.47],
        [1317890460000, 376.75, 376.99, 376.53, 376.54],
        [1317890520000, 376.54, 376.67, 376.08, 376.35],
        [1317890580000, 376.41, 376.94, 376.2, 376.5],
        [1317890640000, 376.46, 376.51, 376.06, 376.09],
        [1317890700000, 376.38, 376.84, 376.09, 376.78],
        [1317890760000, 376.55, 376.6, 376.41, 376.44],
        [1317890820000, 376.45, 376.87, 376.31, 376.87],
        [1317890880000, 376.83, 377, 376.63, 376.95],
        [1317890940000, 376.95, 377, 376.1, 376.1],
        [1317891000000, 376.1, 376.17, 375.64, 375.65],
        [1317891060000, 375.68, 376.05, 375.32, 376.05],
        [1317891120000, 376.03, 376.04, 375.5, 375.72],
        [1317891180000, 375.83, 376.195, 375.7, 376],
        [1317891240000, 376.01, 376.6, 376, 376.5],
        [1317891300000, 376.5, 376.53, 376.11, 376.21],
        [1317891360000, 376.17, 376.3, 376.1, 376.25],
        [1317891420000, 376.4, 376.4, 376.13, 376.29],
        [1317891480000, 376.15, 376.39, 376.1, 376.39],
        [1317891540000, 376.4, 377.11, 376.4, 377],
        [1317891600000, 377.01, 377.15, 376.79, 377.15],
        [1317891660000, 377.02, 377.15, 376.55, 376.88],
        [1317891720000, 376.67, 376.76, 376.52, 376.53],
        [1317891780000, 376.78, 376.91, 376.53, 376.82],
        [1317891840000, 376.73, 376.86, 376.7, 376.75],
        [1317891900000, 376.7, 376.71, 376.5, 376.57],
        [1317891960000, 376.53, 376.74, 376.2, 376.2],
        [1317892020000, 376.17, 376.17, 375.91, 376],
        [1317892080000, 376, 376, 375.77, 375.77],
        [1317892140000, 375.78, 375.88, 375.51, 375.57],
        [1317892200000, 375.57, 375.79, 375.34, 375.63],
        [1317892260000, 375.63, 375.78, 375.35, 375.41],
        [1317892320000, 375.38, 375.61, 375.35, 375.58],
        [1317892380000, 375.55, 375.57, 375.34, 375.48],
        [1317892440000, 375.43, 375.57, 375.12, 375.13]]

    // format of data required
    // [date, open, high,low,close]
    // const data = [
    //     ["2020-06-16T00:00:00+00:00", 994.5, 991.52, 991.52, 993.5],
    //     ["2020-06-16T08:05:00+00:00", 1002, 997, 1000.1, 995.32, 995.32,],
    //     ["2020-06-16T08:10:00+00:00", 1000.99, 996.95, 1001.22, 993.1],
    //     ["2020-06-16T08:15:00+00:00", 994.63, 998.84, 994.63, 996.09,],
    //     ["2020-06-16T08:20:00+00:00", 997.8, 998.64, 996.15, 996.22,]
    // ]
    // const data = [
    //     {
    //         "ASK": 994.8,
    //         "BID": 993.1,
    //         "CLOSE": 993.5,
    //         "HIGH": 994.5,
    //         "LOW": 991.52,
    //         "OPEN": 991.52,
    //         "TIMESTAMP": "2020-06-16T00:00:00+00:00",
    //     },
    //     {
    //         "ASK": 1001.84,
    //         "BID": 1000,
    //         "CLOSE": 1000.1,
    //         "HIGH": 1002,
    //         "LOW": 995.32,
    //         "OPEN": 997,
    //         "TIMESTAMP": "2020-06-16T08:05:00+00:00"
    //     },
    //     {
    //         "ASK": 997,
    //         "BID": 993,
    //         "CLOSE": 996.95,
    //         "HIGH": 1001.22,
    //         "LOW": 993.1,
    //         "OPEN": 1000.99,
    //         "TIMESTAMP": "2020-06-16T08:10:00+00:00"
    //     }
    // ]


    const options = {
        title: {
            text: 'AAPL stock price by minute'
        },
        colors: ['#eb170c', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
            '#FF9655', '#FFF263', '#1feb0c'],
        chart: {
            backgroundColor: {
                linearGradient: [0, 0, 500, 500],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
        },
        rangeSelector: {
            buttons: [{
                type: 'hour',
                count: 1,
                text: '1h'
            }, {
                type: 'day',
                count: 1,
                text: '1D'
            }, {
                type: 'all',
                count: 1,
                text: 'All'
            }],
            selected: 1,
            inputEnabled: false
        },

        series: [{
            name: 'AAPL',
            type: 'candlestick',
            data: data,
            tooltip: {
                valueDecimals: 2
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    // [0, Highcharts.getOptions().colors[0]],
                    // [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    [0, "green"],
                    [1, "0.05"]
                ]
            },
        }],


        plotOptions: {
            candlestick: {
                color: 'green',
                upColor: 'red'
            }
        },
    };

    const App = () => (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
        </div>
    );
    return <App />;

}

