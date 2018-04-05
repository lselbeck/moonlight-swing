import React from 'react'

const MyIcon = props => {
	let {icon, ...others} = props
	return (
		React.createElement(icon, others)
	)
}

export default MyIcon