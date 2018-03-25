import React, { Component } from 'react';

class Vocalist extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='col-12 col-md-6 col-lg-5 mb-5'>
				<div className='row'>
					<div className='col-5'>
						<img src={this.props.img} alt={this.props.name} className='img-fluid rounded-circle' />
					</div>
					<div className='col-7 d-flex align-items-center'>
						<h1>{this.props.name}</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default class Vocalists extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='row justify-content-around vocalists-row'>
				<div className='col-12 mb-5'>
					<h1 className='vocalists-title'>Vocalists</h1>
				</div>
				{this.props.vocalists.map(vocalist => <Vocalist {...vocalist}/>)}
			</div>
		)
	}
}