import React, { Component } from 'react'
import ReactDOM from 'react-dom'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Sound from 'react-sound'
import update from 'immutability-helper';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import ButtonLink from './components/ButtonLink/ButtonLink'
import Members from './pages/Members/Members'
import Landing from './pages/Landing/Landing'
import Music from './pages/Music/Music'
import Events from './pages/Events/Events'



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