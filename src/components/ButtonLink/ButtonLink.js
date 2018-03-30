import React from 'react'
import {Button} from 'reactstrap'
import Scroll, { Link } from 'react-scroll'

export default class ButtonLink extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Link to={this.props.to} spy={true} smooth={true} duration={500}>
				<Button {...this.props} style={{borderRadius: 500}}>
					{this.props.children}
				</Button>
			</Link>
		)
	}
}
