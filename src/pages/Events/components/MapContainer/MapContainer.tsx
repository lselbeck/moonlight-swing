import GoogleMapReact from 'google-map-react';
import React from 'react';
import keys from '../../../../keys';
import Marker from './components/Marker';

interface IProps {
  center: Coords;
}

interface IState {
  height: string;
}

interface Coords {
  lat: number;
  lng: number;
}

export default class MapContainer extends React.Component<IProps, IState> {
  private googleMap: React.RefObject<HTMLDivElement>;
  constructor(props: IProps) {
    super(props);
    this.googleMap = React.createRef();

    this.state = {
      height: '100%',
    };
  }

  componentDidMount() {
    this.setState({
      height: ((this.refs.googleMap as any).parentNode.clientWidth * 0.75).toString(),
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div ref={this.googleMap} style={{ height: this.state.height, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.mapsKey }}
          defaultCenter={this.props.center}
          defaultZoom={11}
        >
          <Marker {...this.props.center} />
        </GoogleMapReact>
      </div>
    );
  }
}
