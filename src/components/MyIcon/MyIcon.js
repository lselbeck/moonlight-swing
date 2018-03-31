import React from 'react'

export default class MyIcon extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		let {icon, ...others} = this.props
		return (
			React.createElement(icon, others)
		)
	}
}