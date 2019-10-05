import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import SEO from '../components/seo';
import PlayStatus from '../util/PlayStatus';
import Contact from './Contact/Contact';
import Events from './Events/Events';
import Info from './Info/Info';
import Intro from './Intro/Intro';
import Landing from './Landing/Landing';
import Members from './Members/Members';
import Music from './Music/Music';

interface IState {
  playStatus: PlayStatus;
  globalStop: () => void;
}

class IndexPage extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.globalStop = this.globalStop.bind(this);

    this.state = {
      playStatus: PlayStatus.Stopped,
      globalStop: this.globalStop,
    };
  }

  globalStop() {
    this.setState({ playStatus: PlayStatus.Stopped });
  }

  render() {
    return (
      <>
        <SEO title="Home" />
        <Landing player={this.state} />
        <Intro />
        <Info />
        <Members />
        <Music player={this.state} />
        <Events />
        <Contact />
      </>
    );
  }
}

export default IndexPage;
