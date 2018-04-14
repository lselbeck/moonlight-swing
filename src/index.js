import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Sound from 'react-sound'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import Intro from './pages/Intro/Intro'
import Info from './pages/Info/Info'
import Members from './pages/Members/Members'
import Landing from './pages/Landing/Landing'
import Music from './pages/Music/Music'
import Events from './pages/Events/Events'
import Contact from './pages/Contact/Contact'

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
				<Contact/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))

registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}