import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import { Icon } from 'semantic-ui-react'
const Pointer = ({ text }) => <p className='pointer'>{text}</p>;

class SimpleMap extends Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='gmap'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}}
          defaultCenter={this.props.club.center}
          defaultZoom={15}
        >
        <Pointer
            lat={this.props.club.center.lat}
            lng={this.props.club.center.lng}
            text={this.props.club.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;