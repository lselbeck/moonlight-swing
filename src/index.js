import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import Home from './pages/Home/Home'
import Music from './pages/Music/Music'
import Members from './pages/Members/Members'
import Events from './pages/Events/Events'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import wholeBand from './pics/whole-band.jpg'

import FaPlayCircle from 'react-icons/lib/fa/play-circle'
import {Button} from 'reactstrap'

var routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/music',
		component: Music
	},
	{
		path: '/members',
		component: Members
	},	
	{
		path: '/events',
		component: Events
	}
]

const Landing = () => (
	<section id='landing'>
		<div className='container-fluid' id='landing-container'>
			<div className='row justify-content-center'>
				<div className='col-9 col-md-4 order-2 order-md-1'>
					<img className='whole-band img-fluid rounded-circle' src={wholeBand} alt='Whole Band'></img>
				</div>
				<div className='col-12 col-md-8 order-1 order-md-2'>
					<div className='row align-items-center'>
						<h1 className='col-12 title-moonlight'>Moonlight</h1>
						<div className='col-8'>
							<span className='title-swing-orchestra'>Swing Orchestra</span>
						</div>
						<div className='col-4'>
							<FaPlayCircle className='play-button'/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

const Intro = () => (
	<section id='intro'>
		<div className='container' id='intro-container'>
			<div className='row justify-content-center align-items-center'>
				<div className='col-12 d-flex justify-content-center'>
					<h1>Playing the classic sounds of big band music since 1903</h1>
				</div>
			</div>
			<div className='row justify-content-center align-items-center mt-4'>
				<div className='col-6 col-md-4 d-flex justify-content-center'>
					<Button className='intro-button' color='secondary'>Learn More</Button>
				</div>
				<div className='col-6 col-md-4 d-flex justify-content-center'>
					<Button className='intro-button' color='secondary'>Book Now</Button>
				</div>
			</div>
		</div>
	</section>
)

const Info = () => (
	<section id='info'>
		<div className='container' id='info-container'>
			<div className='row justify-content-end'>
				<div className='col-12 col-sm-10 col-md-8'>
					<h1 className='hi'>Hi!</h1>
					<p className='info-text'>
						We're the Moonlight Swing Orchestra, a group of musicians, insrumentalists,
						vocalists, professionals, and talented ameturs, who all share the same love
						of performing big band swing music
					</p>
					<p className='info-text'>
						Hear the great sounds of
						<strong>Jack Dorsy</strong>,
						<strong>Glen Miller</strong>,
						<strong>Duke Ellington</strong>,
						<strong>Artie Shaw</strong>, 
						and more! (we even admit to throwing in an occasional modern hit as well!)
					</p>
				</div>
				<div className='col-12 mt-5 d-flex justify-content-center'>
					<Button className='intro-button' color='secondary'>Meet the band</Button>
				</div>
			</div>
		</div>
	</section>
)

const App = () => (
	<div>
		<Landing/>
		<Intro/>
		<Info/>
	</div>
)

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