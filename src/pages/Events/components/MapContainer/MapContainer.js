import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import keys from '../../keys'

export class MapContainer extends React.Component {
render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={this.props.location}
                position={this.props.marker} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.props.location}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.geocodeKey
})(MapContainer)