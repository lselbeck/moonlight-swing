import React from 'react'
import {Button} from 'reactstrap'
import Scroll, { Link } from 'react-scroll'

export default class CapsuleButton extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			borderRadius: '20%/50%'
		}

		this.capsulizeBorderRadius = this.capsulizeBorderRadius.bind(this)
	}

	componentDidMount() {
		this.capsulizeBorderRadius()
	}

	capsulizeBorderRadius() {
		this.setState({
			borderRadius: this.capsuleButton.clientHeight/2
		})
	}

	render() {
		return (
			<Link to={this.props.to} spy={true} smooth={true} duration={500}>
				<Button {...this.props} style={{borderRadius: this.state.borderRadius}}	innerRef={input => this.capsuleButton = input}>
					{this.props.children}
				</Button>
			</Link>
		)
	}
}
