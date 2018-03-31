import React, { Component } from 'react';
import Scroll, { Link } from 'react-scroll'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'

import InTheMood from '../../music/in-the-mood.mp3'
import OrangeColoredSky from '../../music/orange-colored-sky.mp3'
import AmericanPatrol from '../../music/american-patrol.mp3'
import BeyondTheSea from '../../music/beyond-the-sea.mp3'

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
			]
  	}
  }

  render() {
    return (
			<section id='music'>
				<div className='container' id='music-container'>
					<div className='row'>
						<div className='col-12'>
							<p className='text-center'>
								There's a sample of the real thing!  Or view our <Link className='rounded inline-music-link'>
								full repotoire here!</Link>
							</p>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							{this.state.songs.map(song => (
								<div className='row'>
									<div className='col-3'><MusicPlayer class='music-list-button' songs={[song]}/></div>
									<div className='col-9'>song.title</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
    );
  }
}

export default Music;
