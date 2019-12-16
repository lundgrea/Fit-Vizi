import React from 'react';
import MapDisplay from '../MapDisplay/MapDisplay';
import GraphDisplay from '../GraphDisplay/GraphDisplay';
import { workoutData } from '../../workout-data';


import './App.css';

export const App = () => {
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

export default App;
