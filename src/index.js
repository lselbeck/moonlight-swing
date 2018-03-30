import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import Scroll, { Link } from 'react-scroll'
import { Tooltip } from 'reactstrap'
import Sound from 'react-sound'
import update from 'immutability-helper';

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import ButtonLink from './components/ButtonLink/ButtonLink'
import Members from './pages/Members/Members'
import MusicBar from './components/MusicBar/MusicBar'

import WholeBand from './pics/whole-band.jpg'
import FaPlayCircle from 'react-icons/lib/fa/play-circle'

import InTheMood from './music/in-the-mood.mp3'

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

class Landing extends Component {
	constructor(props) {
		super(props)

		this.state = {
			popoverOpen: false
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		})
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
									<FaPlayCircle id='play-button' onClick={this.props.playerControls.toggleMusic} onMouseEnter={this.showPopover} onMouseLeave={this.hidePopover}/>
									<Tooltip placement='bottom' isOpen={this.state.popoverOpen} target='play-button' toggle={this.toggle} autohide={false}>
										Take a listen!
									</Tooltip>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

const Intro = () => (
	<section id='intro'>
		<div className='container' id='intro-container'>
			<div className='row justify-content-center align-items-center'>
				<div className='col-12 d-flex justify-content-center'>
					<h3>Playing the classic sounds of big band music since 1903</h3>
				</div>
			</div>
			<div className='row justify-content-center align-items-center mt-4'>
				<div className='col-6 col-md-4 d-flex justify-content-center'>
					<ButtonLink className='intro-button' color='secondary' to='info'>Learn More</ButtonLink>
				</div>
				<div className='col-6 col-md-4 d-flex justify-content-center'>
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
				<div className='container d-flex align-items-center' id='info-container'>
					<div className='row justify-content-end'>
						<div className='col-12 col-lg-10 col-xl-9'>
							<h1 className='hi'>Hi!</h1>
							<p className='info-text'>
								We're the Moonlight Swing Orchestra, a group of musicians, insrumentalists,
								vocalists, professionals, and talented amateurs, who all share the same love
								of performing big band swing music
							</p>
							<p className='info-text'>
								Hear the great sounds of 
								<strong> Jack Dorsy</strong>,
								<strong> Glen Miller</strong>,
								<strong> Duke Ellington</strong>,
								<strong> Artie Shaw</strong>, 
								and more. We even admit to throwing in an occasional modern hit as well! 
							</p>
						</div>
						<div className='col-12 mt-5 d-flex justify-content-center'>
							<ButtonLink className='intro-button' color='secondary' to='members'>Meet the band</ButtonLink>
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
		this.playMusic = this.playMusic.bind(this)
		this.pauseMusic = this.pauseMusic.bind(this)
		this.stopMusic = this.stopMusic.bind(this)
		this.toggleMusic = this.toggleMusic.bind(this)

		this.state = {
			player: {
				url: InTheMood,
				playStatus: Sound.status.STOPPED,
			},
			playerControls: {
				playMusic: this.playMusic,
				pauseMusic: this.pauseMusic,
				stopMusic: this.stopMusic,
				toggleMusic: this.toggleMusic,
			},
		}
	}

	playMusic() {
		this.setState({
			player: {
				playStatus: Sound.status.PLAYING
			}
		})
	}

	pauseMusic() {
		this.setState({
			player: {
				playStatus: Sound.status.PAUSED
			}
		})
	}

	stopMusic() {
		this.setState({
			player: {
				playStatus: Sound.status.STOPPED
			}
		})
	}

	toggleMusic() {
		this.setState((prev, props) => ({
			player: update(prev.player, {playStatus: {$set: prev.player.playStatus == Sound.status.STOPPED ? Sound.status.PLAYING : Sound.status.STOPPED}})
		}))
	}

	render() {
		return (
			<div>
				<Landing playerControls={this.state.playerControls}/>
				<Intro/>
				<Info/>
				<Members/>
				<MusicBar {...this.state.player}/>
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