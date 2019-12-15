import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Polyline } from 'google-maps-react';

const API_KEY =`${process.env.REACT_APP_API_KEY}`


const triangleCoords = [
  {lat: 47.774, lng: -122.180},
  {lat: 48.466, lng: -123.118},
  {lat: 46.321, lng: -124.757},
  {lat: 47.774, lng: -122.190}
];

export class MapDisplay extends Component {
render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Polyline
          path={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} />
        </Map>
      </>
    );
} 
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapDisplay);


const mapStyles = {
  width: '40%',
  height: '40%',
};