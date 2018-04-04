import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Scroll, { Link } from 'react-scroll'
import Sound from 'react-sound'
import update from 'immutability-helper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './tabs.css'
import keys from './keys'

import ButtonLink from './components/ButtonLink/ButtonLink'
import Members from './pages/Members/Members'
import Landing from './pages/Landing/Landing'
import Music from './pages/Music/Music'



// var routes = [
// 	{
// 		path: '/',
// 		component: Home
// 	},
// 	{
// 		path: '/music',
// 		component: Music
// 	},
// 	{
// 		path: '/members',
// 		component: Members
// 	},	
// 	{
// 		path: '/events',
// 		component: Events
// 	}
// ]

const Intro = () => (
	<section id='intro'>
		<div className='container' id='intro-container'>
			<div className='row justify-content-center align-items-center'>
				<div className='col-12 d-flex justify-content-center'>
					<h3>Playing the classic sounds of big band music since 1903</h3>
				</div>
			</div>
			<div className='row justify-content-center align-items-center mt-4'>
				<div className='col-4 col-md-3 d-flex justify-content-center'>
					<ButtonLink className='intro-button' color='secondary' to='info'>Learn More</ButtonLink>
				</div>
				<div className='col-4 col-md-3 d-flex justify-content-center'>
					<ButtonLink className='intro-button' color='secondary' to='events'>Upcoming Events</ButtonLink>
				</div>
				<div className='col-4 col-md-3 d-flex justify-content-center'>
					<ButtonLink className='intro-button' color='secondary'>Book Now</ButtonLink>
				</div>
			</div>
		</div>
	</section>
)

class Info extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<section id='info'>
				<div className='container' id='info-container'>
					<div className='row justify-content-end '>
						<div className='col-12 col-lg-10 col-xl-9'>
							<h1 className='hi'>Hi!</h1>
							<p className='info-text'>
								We're the Moonlight Swing Orchestra, a group of musicians, insrumentalists,
								vocalists, and professionals who all share the same love
								of performing big band swing music.
							</p>
							<p className='info-text'>
								We play for you for whatever the occasion: dances, receptions, fund raisers, private parties,
								and any other event that calls for great live music.</p>
								<p>Hear the great sounds of 
								<strong> Jack Dorsy</strong>,
								<strong> Glen Miller</strong>,
								<strong> Duke Ellington</strong>,
								<strong> Artie Shaw</strong>, 
								and more. We even admit to throwing in an occasional modern hit as well! 
							</p>
						</div>
					</div>
					<div className='row justify-content-center align-items-center mt-4'>
						<div className='col-6 col-md-4 d-flex justify-content-center'>
							<ButtonLink className='intro-button' color='secondary' to='members'>Meet the Band</ButtonLink>
						</div>
						<div className='col-6 col-md-4 d-flex justify-content-center'>
							<ButtonLink className='intro-button' color='secondary'>Book Now!</ButtonLink>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

class Events extends Component {
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
					start: new Date(2018, 9-1, 22, 17, 0, 0),
					end:   new Date(2018, 9-1, 22, 20, 0, 0),
					venue: 'Monroe Community Senior Center',
					name: 'Autumn Social',
					address: '276 Sky River Parkway, Monroe, WA, 98272',
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
			],
			lat: 47.8488246,
			lng: -121.9801468,
		}
	}

	suffixOf(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
	}

	async getLatAndLong(address) {
		try {
			let response = await fetch(
				'https://maps.google.com/maps/api/geocode/json/',
				{
					body: JSON.stringify({
						address: address,
						key: keys.geocodeKey
					})
				}
			)
			let responseJson = await response.json();
			return responseJson.results[0].geometry.location
		} catch(e) {
			console.error(e)
		}
	}

	componentDidMount() {

	}

	render() {
		let sortedEvents = this.state.events.sort((a, b) => new Date(a.start) - new Date(b.start))
		let firstEvent = sortedEvents[0]
		let mappableEvents = {}
		for (let i = 0; i < sortedEvents.length; i++) {
			let e = this.state.events[i]
			let year = e.start.getFullYear()
			let month = e.start.toLocaleString('en-us', { month: 'long' })

			if (mappableEvents[year] === undefined) {
				mappableEvents[year] = {}
			}

			if (mappableEvents[year][month] === undefined) {
				mappableEvents[year][month] = []
			}

			mappableEvents[year][month].push(e)
		}

		return (
			<section id='events'>
				<div className='container' id='events-container'>
					<div className='row mb-5'>
						<div className='col-12 mb-4'>
							<h1 className='vocalists-title'>Upcoming Events</h1>
						</div>
						<div className='col-7'>
							<p className='text-uppercase'><strong>See us perform at</strong></p>
							<h1>{firstEvent.venue}</h1>
						</div>
						<div className='col-5'></div>
					</div>
					<div className='row mt-5'>
						<div className='col-12'>
							<p className='text-uppercase'><strong>Calendar</strong></p>
							<Tabs>
								<TabList>
									{Object.keys(mappableEvents).map(year => <Tab className='year-tabs'>{year}</Tab>)}
								</TabList>

								{Object.keys(mappableEvents).map(year => (
									<TabPanel>
										<Tabs>
											<TabList>
												{Object.keys(mappableEvents[year]).map(month => <Tab className='month-tabs'>{month}</Tab>)}
											</TabList>

											{Object.keys(mappableEvents[year]).map(month => (
												<TabPanel className='container-fluid pl-2'>
													{mappableEvents[year][month].map(event => (
														<div className='row'>
															<div className='col-3 col-sm-2 col-xl-1'>
																<span className='month-date'>
																	{event.start.getDate()}
																</span>
																{this.suffixOf(event.start.getDate())}
															</div>
															<div className='col-9 col-sm-10 col-xl-11 event-info'>
																<span>
																	{(event.name && event.name.length !== 0) ? event.name + ' at ' : ''}
																	{event.venue}
																</span>
																<p>{event.address}</p>
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
					</div>
				</div>
			</section>
		)
	}
}

class App extends Component {
	constructor(props) {
		super(props)

		this.globalStop = this.globalStop.bind(this)

		this.state = {
			playStatus: Sound.status.STOPPED,
			globalStop: this.globalStop
		}
	}

	globalStop() {
		this.setState({ playStatus: Sound.status.STOPPED })
	}

	render() {
		return (
			<div>
				<Landing player={this.state}/>
				<Intro/>
				<Info/>
				<Members/>
				<Music player={this.state}/>
				<Events/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))

// ReactDOM.render((
//   <Router>
// 	  <div className="app">
// 	    <Header/>
// 	    {routes.map((r,i) => <Route exact key={i} path={r.path} component={r.component}/>)}
// 	    <Footer/>
// 	  </div>
//   </Router>
// ), document.getElementById('root'));


registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}