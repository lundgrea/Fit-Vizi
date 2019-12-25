import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './GraphDisplay.css';

export class GraphDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: this.generateTimeArray(),
        datasets: [
          {
            label: "Power Output",
            data: this.generatePowerArray()
          }
        ]
      }
    }
  }


  generateTimeArray = () => {
    let samples = this.props.workoutData.samples
    let labels = samples.reduce((endValue, sample) => {
      let second = sample.millisecondOffset / 1000
      endValue.push(second)
      return endValue
    }, [])
    return labels
  }


  generatePowerArray = () => {
    let samples = this.props.workoutData.samples
    let data = samples.reduce((endValue, sample) => {
      endValue.push(sample.values.power)
      return endValue
    }, [])
    return data
  }

  render = () => {
    return (
      <section >
        <h2>Power Output Over Time (seconds)</h2>
        <article className='graph'>
        <Line
          options={{
            'onClick' : function (e, item) {
              console.log(item[0]._index)
              console.log(e);
              console.log(item)
            },
            responsive: true,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Power Output'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Time (seconds)'
                }
              }],
            }
          }}
          data={this.state.chartData}
        />
        </article>
      </section>
    )
  }

} 

export default GraphDisplay

