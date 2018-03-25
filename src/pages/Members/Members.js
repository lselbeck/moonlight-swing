import React, { Component } from 'react';
import Scroll, { Link } from 'react-scroll'
import './Members.css';
import BandSectionals from './components/BandSectionals/BandSectionals'
import Vocalists from './components/Vocalists/Vocalists'
import WholeBandNarrow from '../../pics/whole-band-narrow.jpg'
import MarkKunz from '../../pics/mark-kunz.jpg'
import SaxesAndWoodwinds from '../../pics/saxes-and-woodwinds.jpg'
import Trumpets from '../../pics/trumpets.jpg'
import Trombones from '../../pics/trombones.jpg'
import Rhythm from '../../pics/rhythm.jpg'
import RobinHilt from '../../pics/robin-hilt.jpg'
import KirbyTaylor from '../../pics/kirby-taylor.jpg'
import Placeholder from '../../pics/placeholder.jpeg'


export default class Members extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sectionals: [
				{
					title: 'Saxes and Woodwinds',
					img: SaxesAndWoodwinds,
					names: [
						'Mark Kunz',
						'Dan Thompson',
						'Ian Jellison',
						'Tina Toburen',
						'Barbara Hubers-Drake',
						'Beth Gott',
						'Lisa Vallins'
					]
				},
				{
					title: 'Trumpets',
					img: Trumpets,
					names: [
						'Rick Newell ',
						'Jeff Davis',
						'Ed Pearson',
						'Dan Hall',
						'Debbie Dawson',
						'Jim Bradbury',
						'Doug Hodges'
					]
				},
				{
					title: 'Trombones',
					img: Trombones,
					names: [
						'A.J. Johnson',
						'Jeff Bossart ',
						'Ed Pearson',
						'Mel Jackson'
					]
				},
				{
					title: 'Rhythm',
					img: Rhythm,
					names: [
						'Bill Coady',
						'Michael Howell',
						'Cailen Heaton',
						'Luke Selbeck'
					]
				}
			],
			vocalists: [
				{
					img: RobinHilt,
					name: 'Robin Hilt'
				},
				{
					img: KirbyTaylor,
					name: 'Kirby Taylor'
				},
				{
					img: Placeholder,
					name: 'Roger Bare'
				},
				{
					img: Placeholder,
					name: 'Kelsey Jacobs '
				},
				{
					img: Placeholder,
					name: 'Jake Darrow'
				}
			]
		}
	}

	render() {
		return (
			<section id='members'>
				<div className='container' id='members-container'>
					<div className='row whole-band-row'>
						<div className='col-12'>
							<img src={WholeBandNarrow} alt='Whole band' className='w-100 rounded mb-5' />
							<p className='info-text'>
								We are 17 members strong with over <strong>250 years</strong> of cumulative experience!
							</p>
						</div>
					</div>
					<hr/>
					<div className='row mark-kunz-row'>
						<div className='col-12 col-lg-3 mb-5 mb-lg-0'>
							<img src={MarkKunz} alt='Mark Kunz' className='img-fluid rounded mx-auto d-block' />
						</div>
						<div className='col-12 col-lg-9'>
							<p className='members-text'>
								<span className='first-word'>M</span>eet Mark Kunz, the leader of the band.  Born and raised in the Seattle area,
								Mark started his musical career as a saxaphone player in the US Army where he played across
								America.  He joined Moonlight Swing Orchestra in 1980, becoming the leader of the group in 2005.
								Focusing on refining the band's sound has been Mark's goal, and the <Link className='rounded inline-music-link'>
								music speaks for itself!</Link>
							</p>
						</div>
					</div>
					<BandSectionals sectionals={this.state.sectionals}/>
					<Vocalists vocalists={this.state.vocalists}/>
				</div>
			</section>
		)
	}
}
