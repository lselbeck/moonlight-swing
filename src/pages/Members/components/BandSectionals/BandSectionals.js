import React from 'react'

class BandSectional extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='row no-gutters justify-content-center align-items-center mb-5 mb-md-0'>
				<div className='col-12 col-md-6 col-xl-5 pl-4'>
					<h2 className='sectional-title'>{this.props.title}</h2>
					<div className='row'>
						{this.props.names.map(name => <div className='col-6 border-left member-names'>{name}</div>)}
					</div>
				</div>
				<div className={`col-12 col-md-6 col-xl-5 ${this.props.imgFirst ? 'order-md-first' : ''}`}>
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