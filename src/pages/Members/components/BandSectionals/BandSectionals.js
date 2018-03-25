import React from 'react'

class BandSectional extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='row no-gutters'>
				<div className='col-12 col-lg-6 pl-4 pt-5'>
					<h1 className='sectional-title'>{this.props.title}</h1>
					<div className='row'>
						{this.props.names.map(name => <div className='col-6 border-left'>{name}</div>)}
					</div>
				</div>
				<div className={`col-12 col-lg-6 ${this.props.imgFirst ? 'order-lg-first' : ''}`}>
					<img src={this.props.img} alt={this.props.title} className='w-100' />
				</div>
			</div>
		)
	}
}

export default class BandSectionals extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return this.props.sectionals.map((section, i) => <BandSectional {...section} imgFirst={i%2!=0}/>)
	}
}