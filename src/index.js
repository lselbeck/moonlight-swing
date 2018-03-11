import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

import Home from './pages/Home/Home'
import Music from './pages/Music/Music'
import Members from './pages/Members/Members'
import Events from './pages/Events/Events'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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

ReactDOM.render((
  <Router>
	  <div>
	    <Header/>
	    {routes.map((r,i) => <Route exact key={i} path={r.path} component={r.component}/>)}
	    <Footer/>
	  </div>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
