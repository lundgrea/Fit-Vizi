import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './GraphDisplay.css';

export class GraphDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedIndex: '',
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
    let samples = this.props.workoutData
    let labels = samples.reduce((endValue, sample) => {
      let second = sample.millisecondOffset / 1000
      endValue.push(second)
      return endValue
    }, [])
    return labels
  }

  clickHandler = (element) => {
    if (element.length !== 0) {
    const index = element[0]._index
    this.setState({clickedIndex: index}) 
    this.props.connectMapAndGraph(index)
    }
  } 
  
  generatePowerArray = () => {
    let samples = this.props.workoutData
    let data = samples.reduce((endValue, sample) => {
      endValue.push(sample.power)
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
             getElementAtEvent={element => this.clickHandler(element)}
             options={{
            responsive: true,
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Power Output',
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Time (seconds)',
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

