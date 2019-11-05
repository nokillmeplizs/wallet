import React from 'react';
import Chart from 'chart.js';

    export default class Charts extends React.Component {
        chartRef = React.createRef();
      
            
        componentDidMount() {



            var ctx = this.chartRef.current.getContext("2d");
            var values =  [8223, 7555, 7886, 8112, 8556, 500,4444];
            var labels = ['1', '2', '3', '4', '5', '6','7'];
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: values,                      
                        borderColor: [
                            'rgb(139, 81, 156)'
                        ],
                        borderWidth: 2,
                        
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
        render() {
            return (
                <div >
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                        height="350"
                    />
                </div>
            )
        }
    }