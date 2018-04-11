import React, { Component } from 'react'
import FaChevronRight from 'react-icons/lib/fa/chevron-right'
import ContactForm from './components/ContactForm'

export default class Contact extends Component {
	constructor(props) {
		super(props)

		this.state = {
			eventTypes: [
				'parties',
				'dances',
				'receptions',
				'fund raisers',
			]
		}
	}

	render() {
		return (
			<section id='contact'>
				<div className='container' id='contact-container'>
					<div className='row mb-4'>
						<div className='col-12'>
							<h1 className='vocalists-title'>Book Now!</h1>
						</div>
					</div>
					<div className='row'>
						<div className='col-12 col-md-6'>
							<h2>
								Dont be shy, contact us today!  We are available for:
							</h2>
							{this.state.eventTypes.map((type, i) => (
								<p className='my-2 ml-4' key={i}>
									<FaChevronRight/>
									<span className='text-capitalize'>{type}</span>
								</p>
							))}
						</div>
						<div className='col-12 col-md-6'>
							<ContactForm/>
						</div>
					</div>
				</div>
			</section>
		)
	}
}