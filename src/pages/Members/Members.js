import React, { Component } from 'react';
import BandSectionals from './components/BandSectionals/BandSectionals'
import Vocalists from './components/Vocalists/Vocalists'
import ScrollLink from '../../components/ScrollLink/ScrollLink'
import WholeBandNarrow from '../../pics/whole-band-narrow.jpg'
import MarkKunz from '../../pics/mark-kunz.jpg'
import SaxesAndWoodwinds from '../../pics/saxes-and-woodwinds.jpg'
import Trumpets from '../../pics/trumpets.jpg'
import Trombones from '../../pics/trombones.jpg'
import Rhythm from '../../pics/rhythm.jpg'
import RobinHilt from '../../pics/robin-hilt.jpg'
import KirbyTaylor from '../../pics/kirby-taylor.jpg'
import Placeholder from '../../pics/placeholder.jpg'


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
							<img src={WholeBandNarrow} alt='Whole band' className='w-100 mb-2 custom-rounded' />
							<p className='caption-text text-center'>
								We are 17 members strong with over <strong>250 years</strong> of cumulative experience!
							</p>
						</div>
					</div>
					<div className='row mark-kunz-row'>
						<div className='col-12 col-md-5 col-lg-4 mb-4'>
							<img src={MarkKunz} alt='Mark Kunz' className='img-fluid custom-rounded mx-auto d-block' />
						</div>
						<div className='col-12 col-md-7 col-lg-8'>
							<p className='members-text mt-4'>
								<span className='first-word'>M</span>eet Mark Kunz, the leader of the band.  Born and raised in the Seattle area,
								Mark started his musical career in 1970 with the rock band 'Good Question', later joining the US Army Band as a saxophonist.
								He joined Moonlight Swing Orchestra in 2006, becoming the leader of the group in 2010.
								Focusing on refining the band's sound has been Mark's goal, and the <ScrollLink className='rounded inline-music-link'
								to='music'>music speaks for itself!</ScrollLink>
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
