import React from 'react'
import WholeBand from '../../pics/whole-band.jpg'
import MyIcon from '../../components/MyIcon/MyIcon'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'

import InTheMood from '../../music/in-the-mood.mp3'
import OrangeColoredSky from '../../music/orange-colored-sky.mp3'
import AmericanPatrol from '../../music/american-patrol.mp3'
import BeyondTheSea from '../../music/beyond-the-sea.mp3'

export default class Landing extends React.Component {
	constructor(props) {
		super(props)

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
			]
		}
	}

	render() {
		return (
			<section id='landing'>
				<div className='container-fluid' id='landing-container'>
					<div className='row justify-content-center'>
						<div className='col-9 col-md-4 order-2 order-md-1'>
							<img className='whole-band img-fluid rounded-circle' src={WholeBand} alt='Whole Band'></img>
						</div>
						<div className='col-12 col-md-8 order-1 order-md-2'>
							<div className='row align-items-center'>
								<h1 className='col-12 title-moonlight'>Moonlight</h1>
								<div className='col-8'>
									<span className='title-swing-orchestra'>Swing Orchestra</span>
								</div>
								<div className='col-4'>
									<MusicPlayer id='play-button' player={this.props.playStatus} songs={this.state.songs}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}