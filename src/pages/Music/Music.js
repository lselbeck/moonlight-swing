import React, { Component } from 'react';
import Scroll, { Link } from 'react-scroll'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

import InTheMood from '../../music/in-the-mood.mp3'
import OrangeColoredSky from '../../music/orange-colored-sky.mp3'
import AmericanPatrol from '../../music/american-patrol.mp3'
import BeyondTheSea from '../../music/beyond-the-sea.mp3'
import Hayburner from '../../music/hayburner.mp3'
import WillowWeepForMe from '../../music/willow-weep-for-me.mp3'
import Pa65000 from '../../music/pa-6-5000.mp3'

class Music extends Component {
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
				{
					title: 'Hayburner',
					url: Hayburner,
				},
				{
					title: 'Willow Weep for Me',
					url: WillowWeepForMe,
				},
				{
					title: 'Pennsylvania 6-5000',
					url: Pa65000,
				},
			]
  	}
  }
  
  render() {
    return (
			<section id='music'>
				<div className='container' id='music-container'>
					<div className='row justify-content-center'>
						<div className='col-7'>
							<h2>
								Take a sample of the real thing!  Or view our <Link className='rounded inline-light-link'>
								full repotoire here!</Link>
							</h2>
						</div>
					</div>
					<div className='row justify-content-center'>
						{this.state.songs.map(song => (
							<div className='col-7 d-flex align-items-center my-2'>
								<MusicPlayer className='music-list-button float-left mr-3' player={this.props.player} songs={[song]} stopOnFinish={true}/>
								<span>{song.title}</span>
							</div>
						))}
					</div>
					<div className='row mt-4'>
						<div className='col-12 d-flex justify-content-center'>
							<ButtonLink className='intro-button'>Hear Us Live!</ButtonLink>
						</div>
					</div>
				</div>
			</section>
    );
  }
}

export default Music;
