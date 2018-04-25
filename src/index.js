import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
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
import Admin from './pages/Admin/Admin'

class Main extends Component {
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



const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/admin',
		component: Admin
	}
]

//ReactDOM.render(<App/>, document.getElementById('root'))

ReactDOM.render((
	<Router>
		<div className='app'>
			{routes.map((r,i) => <Route exact key={i} path={r.path} component={r.component}/>)}
		</div>
	</Router>
), document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
	module.hot.accept();
}