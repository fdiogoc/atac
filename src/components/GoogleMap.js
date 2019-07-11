import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { MapPin } from 'react-feather'

let mapkey = ''

if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: -28.0914483,
      lng: 153.4425208
    },
    zoom: 14
  }

  render() {
   
    const center = {
      lat: parseFloat(this.props.locations[0].lat),
      lng: parseFloat(this.props.locations[0].lng)
    }
    
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapkey }}
          defaultCenter={center}
          defaultZoom={18}
        >
          <Marker lat={parseFloat(this.props.locations[0].lat)} lng={parseFloat(this.props.locations[0].lng)}  />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap

const Marker = () => {
  return (
    <div style={{ color: 'red' }}>
      <MapPin />
    </div>
  )
}
