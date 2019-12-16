import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './GraphDisplay.css';

export class GraphDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: ["Power over Time"],
        datasets: [
          {
            label: "Power",
            data: this.generatePowerArray()
          }
        ]
      }
    }
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
    console.log(this.state.chartData)
    return (
      <section className='graph'>
        <h2>graph</h2>
        <article>
        <Bar
          options={{
            responsive: true
          }}
          data={this.state.chartData}
        />
        </article>
      </section>
    )
  }

} 

export default GraphDisplay

