import React from 'react'
import Sound from 'react-sound'

export default class MusicBar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id='music-bar'>
				<div className='container' id='music-bar-container'>
					<div className='row'>
						<div className='col-12'>
							<Sound {...this.props}/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}