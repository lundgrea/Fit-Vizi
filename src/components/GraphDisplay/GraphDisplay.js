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
            label: "Power",
            data: this.generatePowerArray()
          }
        ]
      }
    }


  }

  generateTimeArray = () => {
    let samples = this.props.workoutData.samples
    let labels = samples.reduce((endValue, sample) => {
      endValue.push(sample.millisecondOffset)
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
      <section className='graph'>
        <h2>graph</h2>
        <article>
        <Line
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

