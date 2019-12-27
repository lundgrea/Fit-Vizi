import React, { Component } from 'react';
import MapDisplay from '../MapDisplay/MapDisplay';
import GraphDisplay from '../GraphDisplay/GraphDisplay';
import BestDisplay from '../BestDisplay/BestDisplay';
import { fetchAllWorkouts } from '../../Util/apiCalls/apiCalls';
import { Marker } from 'google-maps-react';
import { cleanWorkoutResults } from '../../Util/dataCleaner/dataCleaner'
import './App.css';



export class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      networkMessage: '',
      error: '',
      allData: {},
      cleanedData: [],
      topOne: {},
      topFive: {},
      topTen: {}, 
      topFifteen: {}, 
      topTwenty: {},
      selectedIndex: '',
      selectedItem: ''
    }
  }

  componentDidMount = async () => {
    try {
      const data = await fetchAllWorkouts()
      this.setState({ allData: data })
      this.setState({ isLoading: false })
      const cleanedData = await cleanWorkoutResults(data)
      this.setState({ cleanedData} )
      const topTwenty = await this.determineBest(20)
      this.setState({ topTwenty })
      const topFifteen = await this.determineBest(15)
      this.setState({ topFifteen })
      const topTen = await this.determineBest(10)
      this.setState({ topTen })
      const topFive = await this.determineBest(5)
      this.setState({ topFive })
      const topOne = await this.determineBest(1)
      this.setState({ topOne})
    } catch {
      this.setState({ error: 'Unable to get YOUR workout data. Please try again.' })
    }
  }


  calculateMinutes = (minutes) => {
    let secondsLength = minutes * 60
    return secondsLength
  }

  determineBest = async (duration) => {
    let seconds = this.calculateMinutes(duration)
    let currentMax = 0;
    let samples = await this.state.cleanedData;
    for (var i = 0; i < duration; i++) {
      if (samples[i].power) {
        currentMax += samples[i].power
      }
    }

    let startIndex = 0

    let actualMax = currentMax

    for (var j = seconds; j < samples.length; j++) {
      if (samples[j].power && samples[j - seconds].power) {
        currentMax += (samples[j].power - samples[j - seconds].power)
        if (samples[j].power > samples[j-seconds].power) {
          startIndex = (j - seconds + 1)
        }
         actualMax = Math.max(currentMax, actualMax)
      } 
    }
    let average = actualMax / seconds
    let shortenedAverage = average.toFixed(2)
  return {startIndex: startIndex, averagePower: shortenedAverage}
  }

  connectMapAndGraph = (item) => {
    this.setState({selectedIndex: item})
    this.findSelectedItem(item)
  }

  findSelectedItem = (index) => {
    let selectedItem = this.state.cleanedData[index]
    this.setState({ selectedItem })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fit Vizi</h1>
        </header>
        {this.state.cleanedData.length > 1 && <BestDisplay topOne={this.state.topOne} topFive={this.state.topFive} topTen={this.state.topTen} topFifteen={this.state.topFifteen} topTwenty={this.state.topTwenty}/>}
        {this.state.cleanedData.length > 1 && <GraphDisplay connectMapAndGraph={this.connectMapAndGraph} workoutData={this.state.cleanedData} />}
        {this.state.cleanedData.length > 1 && <MapDisplay selectedItem={this.state.selectedItem} workoutData={this.state.cleanedData}/>}
    </div>
  );
  }
}

export default App;
