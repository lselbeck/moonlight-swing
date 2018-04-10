import React from 'react'
import GoogleMapReact from 'google-map-react'
import keys from '../../keys'
import Marker from './components/Marker'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      height: '100%'
    }
  }

  componentDidMount() {
    this.setState({
      height: this.refs.googleMap.parentNode.clientWidth * 0.8
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div ref='googleMap' style={{ height: this.state.height, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={11}
        >
          <Marker
            {...this.props.center}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
