import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Polyline } from 'google-maps-react';
import { workoutData } from '../../workout-data';

const API_KEY =`${process.env.REACT_APP_API_KEY}`


// const triangleCoords = [
//   {lat: 47.774, lng: -122.180},
//   {lat: 48.466, lng: -123.118},
//   {lat: 46.321, lng: -124.757},
//   {lat: 47.774, lng: -122.190}
// ];

let routes 

export class MapDisplay extends Component {

 
  displayPolyline = () => {
    let routes = this.generatePolylines()
    return (
      <Polyline
          path={routes}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} />
        
    )
  }


  generatePolylines = () => {
    let samples = workoutData.samples
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
      <>
        <Map
          google={this.props.google}
          zoom={15}
          style={mapStyles}
          initialCenter={{ lat: 40.01488, lng: -105.131}}
        >
          {this.displayPolyline()}
        </Map>
      </>
    );
  } 
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapDisplay);


const mapStyles = {
  width: '100%',
  height: '100%',
};