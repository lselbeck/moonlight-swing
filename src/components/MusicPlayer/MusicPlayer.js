import React from 'react'
import Sound from 'react-sound'
import update from 'immutability-helper';
import FaPlayCircle from 'react-icons/lib/fa/play-circle'
import FaStopCircle from 'react-icons/lib/fa/stop-circle'
import MyIcon from '../MyIcon/MyIcon'

export default class MusicPlayer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			player: {
				url: this.props.songs[0].url,
				playStatus: this.props.player.playStatus
			},
			icon: this.props.player.playStatus === Sound.status.PLAYING ? FaStopCircle : FaPlayCircle,
			currentSongIndex: 0,
		}

		this.play = this.play.bind(this)
		this.stop = this.stop.bind(this)
		this.togglePlay = this.togglePlay.bind(this)
		this.next = this.next.bind(this)
		this.handleFinishPlaying = this.handleFinishPlaying.bind(this)
	}

	play() {
		this.props.player.globalStop()

		let newState = update(this.state, {
			player: {
				playStatus: {$set: Sound.status.PLAYING}
			},
			icon: {$set: FaStopCircle},
		})

		this.setState(newState)
	}

	stop() {
		let newState = update(this.state, {
			player: {
				playStatus: {$set: Sound.status.STOPPED}
			},
			icon: {$set: FaPlayCircle},
		})

		this.setState(newState)
	}

	togglePlay() {
		if (this.state.player.playStatus === Sound.status.STOPPED) {
			this.play()
		} else {
			this.stop()
		}
	}

	next() {
		let nextIndex = (this.state.currentSongIndex+1) % this.props.songs.length

		let newState = update(this.state, {
			player: {
				url: {$set: this.props.songs[nextIndex].url},
			},
			currentSongIndex: {$set: nextIndex},
		})

		this.setState(newState)
	}

	handleFinishPlaying() {
		if (this.props.stopOnFinish) {
			this.stop()
		} else {
			this.next()
		}
	}

	componentWillReceiveProps(nextProps) {
	  // You don't have to do this check first, but it can help prevent an unneeded render
	  if (this.state.player.playStatus === Sound.status.PLAYING &&
	  		this.props.player.playStatus === Sound.status.STOPPED) {
	    this.stop()
	  }
	}

	render() {
		return (
			<div>
				<MyIcon icon={this.state.icon} className={this.props.className} id={this.props.id} onClick={this.togglePlay}/>
				<Sound {...this.state.player} onFinishedPlaying={this.handleFinishPlaying}/>
			</div>
		)
	}
}