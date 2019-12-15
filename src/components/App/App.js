import React from 'react';
import MapDisplay from '../MapDisplay/MapDisplay'
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
     <h1>Fit Vizi</h1>
      <MapDisplay />
      </header>
    </div>
  );
}

export default App;
