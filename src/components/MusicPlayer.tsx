import update from 'immutability-helper';
import React from 'react';
import { FaPlayCircle, FaStopCircle } from 'react-icons/fa';
import { IconType } from 'react-icons/lib/cjs';
import Sound from 'react-sound';
import PlayStatus from '../util/PlayStatus';
import MyIcon from './MyIcon';

interface IProps {
  songs: Array<{ title: string; url: string }>;
  player: { playStatus: PlayStatus; globalStop: () => void };
  stopOnFinish?: boolean;
  className?: string;
  id?: string;
}

interface IState {
  player: {
    url: string;
    playStatus: PlayStatus;
  };
  icon: IconType;
  currentSongIndex: number;
}

export default class MusicPlayer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      player: {
        url: this.props.songs[0].url,
        playStatus: this.props.player.playStatus,
      },
      icon: this.props.player.playStatus === PlayStatus.Playing ? FaStopCircle : FaPlayCircle,
      currentSongIndex: 0,
    };

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.next = this.next.bind(this);
    this.handleFinishPlaying = this.handleFinishPlaying.bind(this);
  }

  play() {
    this.props.player.globalStop();

    const newState = update(this.state, {
      player: {
        playStatus: { $set: PlayStatus.Playing },
      },
      icon: { $set: FaStopCircle },
    });

    this.setState(newState);
  }

  stop() {
    const newState = update(this.state, {
      player: {
        playStatus: { $set: PlayStatus.Stopped },
      },
      icon: { $set: FaPlayCircle },
    });

    this.setState(newState);
  }

  togglePlay() {
    if (this.state.player.playStatus === PlayStatus.Stopped) {
      this.play();
    } else {
      this.stop();
    }
  }

  next() {
    const nextIndex = (this.state.currentSongIndex + 1) % this.props.songs.length;

    const newState = update(this.state, {
      player: {
        url: { $set: this.props.songs[nextIndex].url },
      },
      currentSongIndex: { $set: nextIndex },
    });

    this.setState(newState);
  }

  handleFinishPlaying() {
    if (this.props.stopOnFinish) {
      this.stop();
    } else {
      this.next();
    }
  }

  componentWillReceiveProps() {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (
      this.state.player.playStatus === PlayStatus.Playing &&
      this.props.player.playStatus === PlayStatus.Stopped
    ) {
      this.stop();
    }
  }

  render() {
    return (
      <div>
        <MyIcon
          icon={this.state.icon}
          className={this.props.className || ''}
          id={this.props.id || ''}
          onClick={this.togglePlay}
        />
        <Sound {...this.state.player} onFinishedPlaying={this.handleFinishPlaying} />
      </div>
    );
  }
}
