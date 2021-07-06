import React, { Component } from 'react';
import GoogleMapReact from "google-map-react";
import mapStyles from "./mapStyles";
import img from "./assets/maptitle.png"
import pin from "./assets/location-icon.png"
import "./styles.scss";

const AnyReactComponent = () => (
  <div>
    <img className="pin-png"
      src={pin}
      alt="pin"
    />
  </div>
);

class MapContainer extends Component {
  static defaultProps = {
    center: {
        lat: 51.5124449,
        lng: -0.1270106
    },
    zoom: 13,
  };

 render() {
   return (
     <div className="map-display">
        <img className="map-title-png" src={img} alt="map-title" />

        <GoogleMapReact
            className="google-map"
            bootstrapURLKeys={{ 
              key: 'AIzaSyBxYekrFbbgynY0AuLLJwVuzsuWtncCGrM',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{
              styles: mapStyles.styles
            }}
            >
            <AnyReactComponent
              lat={51.5124449}
              lng={-0.1270106}
            />

        </GoogleMapReact >
      </div>      
  )
 }
} 

export default MapContainer;