import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polyline } from 'google-maps-react';

const API_KEY =`${process.env.REACT_APP_API_KEY}`



export class MapDisplay extends Component { 

  displayPolyline = () => {
    let routes = this.generatePolylines()
    return (
      <Polyline
        path={routes}
        strokeColor="#DB3A34"
        strokeOpacity={0.8}
        strokeWeight={5} 
      />
    )
  }

  generatePolylines = () => {
    let samples = this.props.workoutData.samples
    let paths = samples.reduce((endValue, sample) => {
      if (sample.values.positionLat != undefined) {
        let object = {lat: '', lng: ''}
        object.lat = sample.values.positionLat
        object.lng = sample.values.positionLong
        endValue.push(object)
      return endValue
      } else {
      return endValue
      }
    }, [{lat: 40.01488, lng: -105.131}])
    return paths
  }


  render() {
    return (
      <div className='map'>
        <h2>Map of Travel Route</h2>
        <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 40.01488, lng: -105.131}}
        >
        {this.displayPolyline()}
        </Map>
      </div>
    );
  } 
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapDisplay);


const mapStyles = {
  width: '75%',
  height: '75%',
};