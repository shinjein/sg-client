import React, { Component } from 'react';
import GoogleMapReact from "google-map-react";
import  mapStyles  from "./mapStyles";
import "./map.scss";

const AnyReactComponent = ({Pin}) => (
  <div>
    <img className="pin"
      src={Pin}
      alt="pin"
    />
  </div>
);

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 38.736946,
      lng: -9.142685,
    },
    zoom: 13,
  };

 render() {
   return (
     <div className="map-display">
      <GoogleMapReact
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