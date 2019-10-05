import React from 'react';
import MusicPlayer from '../../components/MusicPlayer';
import WholeBand from '../../images/whole-band.jpg';
import AmericanPatrol from '../../music/american-patrol.mp3';
import BeyondTheSea from '../../music/beyond-the-sea.mp3';
import InTheMood from '../../music/in-the-mood.mp3';
import OrangeColoredSky from '../../music/orange-colored-sky.mp3';
import PlayStatus from '../../util/PlayStatus';

interface IProps {
  player: { playStatus: PlayStatus; globalStop: () => void };
}

interface IState {
  songs: Array<{ title: string; url: string }>;
}

export default class Landing extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      songs: [
        {
          title: 'In the Mood',
          url: InTheMood,
        },
        {
          title: 'Orange Colored Sky',
          url: OrangeColoredSky,
        },
        {
          title: 'American Patrol',
          url: AmericanPatrol,
        },
        {
          title: 'Beyond the Sea',
          url: BeyondTheSea,
        },
      ],
    };
  }

  render() {
    return (
      <section id="landing">
        <div className="container-fluid" id="landing-container">
          <div className="row justify-content-center">
            <div className="col-9 col-md-4 order-2 order-md-1">
              <img
                className="whole-band img-fluid rounded-circle"
                src={WholeBand}
                alt="Whole Band"
              />
            </div>
            <div className="col-12 col-md-8 order-1 order-md-2">
              <div className="row align-items-center">
                <h1 className="col-12 title-moonlight">Moonlight</h1>
                <div className="col-9 col-md-8">
                  <span className="title-swing-orchestra">Swing Orchestra</span>
                </div>
                <div className="col-3 col-md-4">
                  <MusicPlayer
                    id="play-button"
                    player={this.props.player}
                    songs={this.state.songs}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
