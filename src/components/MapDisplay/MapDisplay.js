import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

export const MapDisplay = (props) => {

    return (
        <Map
          google={props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
} 


export default GoogleApiWrapper({
  apiKey: process.env_REACT_APP_API_KEY
})(MapDisplay);


const mapStyles = {
  width: '100%',
  height: '100%',
};