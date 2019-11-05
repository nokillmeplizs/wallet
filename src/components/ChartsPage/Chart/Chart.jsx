import React from 'react';
import Chart from 'chart.js';

    export default class Charts extends React.Component {
        chartRef = React.createRef();
      
            
        componentDidMount() {
            let data = [8223, 7555, 7886, 8112, 8556, 500,4444];
            let name = ['1', '2', '3', '4', '5', '6','7','8'];

            let ctx = this.chartRef.current.getContext("2d");
            let values = data;
            let labels = name;
            let myChart = new Chart(ctx, {
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