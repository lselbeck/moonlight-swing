import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import MapContainer from './components/MapContainer/MapContainer'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

import './tabs.css';

const dateStringOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function getTimespanString(event) {
	if (!event || !event.start || !event.end) return ""

	return (
		event.start.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/\s/g, "") +
		' - ' +
		event.end.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).replace(/\s/g, "")
	).toLowerCase()
}

const FeateredEvent = props => (
	<div className={props.className}>
		<p className='text-uppercase'><strong>See us perform at</strong></p>
		<h1 className='mt-5 featured-name'>{props.event.name ? `"${props.event.name}"` : ''}</h1>
		{!!props.event.name ? <div>{props.event.venue}</div> : <h1>{props.event.venue}</h1>}
		<div>{props.event.start && props.event.start.toLocaleString('en-us', dateStringOptions)}</div>
		<div>
			<span className='event-time'>
				{getTimespanString(props.event)}
			</span>
			<span className='event-address ml-3 pl-3'>{props.event.address}</span>
		</div>
	</div>
)

const Calendar = props => {
	function suffixOf(i) {
		var j = i % 10,
			k = i % 100;
		if (j === 1 && k !== 11) {
			return "st";
		}
		if (j === 2 && k !== 12) {
			return "nd";
		}
		if (j === 3 && k !== 13) {
			return "rd";
		}
		return "th";
	}

	return (
		<div className={props.className}>
			<p className='text-uppercase'><strong>Calendar</strong></p>
			<Tabs>
				<TabList>
					{Object.keys(props.events).map((year, yearIndex) => <Tab className='year-tabs' key={yearIndex}>{year}</Tab>)}
				</TabList>

				{Object.keys(props.events).map((year, yearIndex) => (
					<TabPanel key={yearIndex}>
						<Tabs>
							<TabList>
								{Object.keys(props.events[year]).map((month, monthIndex) => (
									<Tab className='month-tabs' key={monthIndex}>
										{new Date(2018, month, 1, 0, 0, 0).toLocaleString('en-us', { month: 'long' })}
									</Tab>
								))}
							</TabList>

							{Object.keys(props.events[year]).map((month, monthIndex) => (
								<TabPanel className='container-fluid pl-2' key={monthIndex}>
									{props.events[year][month].map((event, eventIndex) => (
										<div className='row' key={eventIndex}>
											<div className='col-3 col-sm-2 col-xl-1'>
												<span className='month-date'>
													{event.start.getDate()}
												</span>
												{suffixOf(event.start.getDate())}
											</div>
											<div className='col-9 col-sm-10 col-xl-11 event-info'>
												<span>
													{(event.name && event.name.length !== 0) ? event.name + ' at ' : ''}
													{event.venue}
												</span>
												<p>
													<span className='event-time'>
														{getTimespanString(event)}
													</span>
													<span className='event-address ml-3 pl-3'>{event.address}</span>
												</p>
											</div>
										</div>
									))}
								</TabPanel>
							))}

						</Tabs>
					</TabPanel>
				))}
			</Tabs>
		</div>
	)
}

export default class Events extends Component {
	constructor(props) {
		super(props)

		this.state = {
			events: [
				{
					start: new Date(2018, 6-1, 30, 17, 0, 0),
					end:   new Date(2018, 6-1, 30, 20, 0, 0),
					venue: 'Monroe Community Senior Center',
					name: 'Swingin\' to Summer',
					address: '276 Sky River Parkway, Monroe, WA 98272',
				},
				{
					start: new Date(2018, 11-1, 24, 19, 0, 0),
					end:   new Date(2018, 11-1, 24, 21, 0, 0),
					venue: 'Crossroads Bellevue Market Stage',
					name: '',
					address: '15600 NE 8th St, Bellevue, WA 98007',
				},
				{
					start: new Date(2018, 7-1, 21, 19, 0, 0),
					end:   new Date(2018, 7-1, 21, 21, 0, 0),
					venue: 'Crossroads Bellevue Market Stage',
					name: '',
					address: '15600 NE 8th St, Bellevue, WA 98007',
				},
				{
					start: new Date(2018, 8-1, 27, 17, 30, 0),
					end:   new Date(2018, 8-1, 27, 20, 30, 0),
					venue: 'Evergreen State Fair Xfinity Courtyard Stage',
					name: '',
					address: '14405 179th Ave SE, Monroe, WA 98272',
				},
				{
					start: new Date(2018, 12-1, 8, 13, 0, 0),
					end:   new Date(2018, 12-1, 8, 15, 30, 0),
					venue: 'Monroe Community Senior Center',
					name: 'Swing into Christmas',
					address: '276 Sky River Parkway, Monroe, WA, 98272',
				},
				{
					start: new Date(2018, 12-1, 31, 18, 30, 0),
					end:   new Date(2018, 12-1, 31, 21, 30, 0),
					venue: 'Emerald Heights',
					name: 'New Years Eve Gala (Private Event)',
					address: '276 Sky River Parkway, Monroe, WA, 98272',
				},
				{
					start: new Date(2018, 7-1, 14, 19, 30, 0),
					end:   new Date(2018, 7-1, 14, 21, 30, 0),
					venue: 'Third Place Commons',
					name: '',
					address: '17171 Bothell Way NE, Lake Forest Park, WA 98155',
				},
				{
					start: new Date(2018, 8-1, 11, 19, 0, 0),
					end:   new Date(2018, 8-1, 11, 21, 0, 0),
					venue: 'Spee-Bi-Dah',
					name: 'Private Event',
					address: 'Spee-Bi-Dah, WA, 98271',
				},
			],
			center: undefined,
		}
	}

	getEventsToDisplay() {
		return this.state.events.filter(e => e.start > new Date()).sort((a, b) => new Date(a.start) - new Date(b.start))
	}

	async getLatAndLong(address) {
		try {
			let response = await fetch(`/api/coords?address=${address}`, { method: 'GET' })
			return (await response.json()).coords
		} catch(e) {
			console.error(e)
		}
	}

	async componentDidMount() {
		let events = this.getEventsToDisplay()
		if (events.length > 0) {
			let firstEvent = events[0]
			let coords = await this.getLatAndLong(firstEvent.address)
			this.setState({
				center: coords
			})
		}
	}

	getCalendarFormatEvents(events) {
		let mappableEvents = {}
		for (let i = 0; i < events.length; i++) {
			let e = this.state.events[i]
			let year = e.start.getFullYear()
			let month = e.start.getMonth()

			if (mappableEvents[year] === undefined) {
				mappableEvents[year] = []
			}

			if (mappableEvents[year][month] === undefined) {
				mappableEvents[year][month] = []
			}

			mappableEvents[year][month].push(e)
		}

		return mappableEvents
	}

	renderNoEvents() {
		return (
			<section id='events'>
				<div className='container' id='events-container'>
					<div className='row mb-5'>
						<div className='col-12 mb-4'>
							<h1 className='vocalists-title'>Upcoming Events</h1>
						</div>
						<div className='col-12'>
							<h1>Stay tuned for more upcoming events</h1>
						</div>
					</div>
					<div className='row mt-5'>
						<div className='col-12 d-flex justify-content-center'>
							<ButtonLink className='intro-button event-button' to='contact'>Book us for your event!</ButtonLink>
						</div>
					</div>
				</div>
			</section>
		)
	}

	render() {
		let events = this.getEventsToDisplay()

		let firstEvent = events[0]

		if (!firstEvent) {
			return this.renderNoEvents()
		}

		let calendarFormatEvents = this.getCalendarFormatEvents(events)

		return (
			<section id='events'>
				<div className='container' id='events-container'>
					<div className='row mb-5 no-gutters'>
						<div className='col-12 mb-4'>
							<h1 className='vocalists-title'>Upcoming Events</h1>
						</div>
						<FeateredEvent className='col-12 col-md-6' event={firstEvent}/>
						<div className='col-12 col-md-6'>
							{this.state.center && <MapContainer center={this.state.center}></MapContainer>}
						</div>
					</div>
					<div className='row mt-5'>
						<Calendar className='col-12' events={calendarFormatEvents}/>
					</div>
					<div className='row mt-5'>
						<div className='col-12 d-flex justify-content-center'>
							<ButtonLink className='intro-button event-button' to='contact'>Book us for your event!</ButtonLink>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
