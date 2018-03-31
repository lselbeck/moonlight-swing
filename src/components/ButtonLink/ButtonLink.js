import React from 'react'
import {Button} from 'reactstrap'
import ScrollLink from '../ScrollLink/ScrollLink'

export default class ButtonLink extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<ScrollLink to={this.props.to}>
				<Button {...this.props} style={{borderRadius: 500}}>
					{this.props.children}
				</Button>
			</ScrollLink>
		)
	}
}
