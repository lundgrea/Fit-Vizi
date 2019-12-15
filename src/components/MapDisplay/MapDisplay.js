import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const API_KEY =`${process.env.REACT_APP_API_KEY}`

export const MapDisplay = (props) => {
    return (
      <>
        <Map
          google={props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        <Marker position={{ lat: 48.00, lng: -122.00}} />
      </>
    );
} 


export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapDisplay);


const mapStyles = {
  width: '40%',
  height: '40%',
};