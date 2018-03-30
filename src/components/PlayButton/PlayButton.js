import React from 'react'
import FaPlayCircle from 'react-icons/lib/fa/play-circle'
import FaStopCircle from 'react-icons/lib/fa/stop-circle'

export default class PlayButton extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			icon: this.props.playing ? FaStopCircle : FaPlayCircle
		}

		this.togglePlay = this.togglePlay.bind(this)
	}

	togglePlay() {
		this.setState({
			icon: this.state.icon === FaStopCircle ? FaPlayCircle : FaStopCircle
		})
		this.props.playerControls.toggleMusic()
	}

	render() {
		return (
			React.createElement(this.state.icon, {id: this.props.id, onClick: this.togglePlay})
		)
	}
}