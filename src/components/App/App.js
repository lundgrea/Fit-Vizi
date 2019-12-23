import React, { Component } from 'react';
import MapDisplay from '../MapDisplay/MapDisplay';
import GraphDisplay from '../GraphDisplay/GraphDisplay';
import { workoutData } from '../../workout-data';
import './App.css';



export class App extends Component {
  constructor() {
    super()
    this.state = {
      topOne: {},
      topFive: {},
      topTen: {}, 
      topFifteen: {}, 
      topTwenty: {},
    }
  }

  componentDidMount = () => {
    let twenty = this.calculateMinutes(20)
    let topTwenty = this.determineBest(twenty)
    let fifteen = this.calculateMinutes(15)
    let topFifteen = this.determineBest(fifteen)
    let ten = this.calculateMinutes(10)
    let topTen = this.determineBest(ten)
    let five = this.calculateMinutes(5)
    let topFive = this.determineBest(five)
    let one = this.calculateMinutes(1)
    let topOne = this.determineBest(one)
    this.setState({ topOne: topOne})
    this.setState({ topFive : topFive })
    this.setState({ topTen : topTen })
    this.setState({ topFifteen : topFifteen })
    this.setState({ topTwenty : topTwenty })
  }


  determineBest = (duration) => {
    let currentMax = 0;
    let samples = workoutData.samples;
    for (var i = 0; i < duration; i++) {
      if (samples[i].values.power) {
        currentMax += samples[i].values.power
      }
    }

    let startIndex = 0

    let actualMax = currentMax

    for (var j = duration; j < samples.length; j++) {
      if (samples[j].values.power && samples[j - duration].values.power) {
        currentMax += (samples[j].values.power - samples[j - duration].values.power)
        if (samples[j].values.power > samples[j-duration].values.power) {
          startIndex = (j - duration + 1)
        }
         actualMax = Math.max(currentMax, actualMax)
      } 
    }
  
  return {startIndex: startIndex, averagePower: (actualMax/duration)}
  }

  calculateMinutes = (minutes) => {
    let secondsLength = minutes * 60
    return secondsLength
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fit Vizi</h1>
        </header>
      <GraphDisplay workoutData={workoutData} />
      <MapDisplay workoutData={workoutData}/>
    </div>
  );
  }
}

export default App;
