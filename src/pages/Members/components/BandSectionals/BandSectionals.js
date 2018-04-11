import React from 'react'

const BandSectional = props => (
	<div className='row no-gutters justify-content-center align-items-center mb-5 mb-md-0'>
		<div className='col-12 col-md-6 col-xl-5 pl-4'>
			<h2 className='sectional-title'>{props.title}</h2>
			<div className='row'>
				{props.names.map((name, i) => <div key={i} className='col-6 border-left member-names'>{name}</div>)}
			</div>
		</div>
		<div className={`col-12 col-md-6 col-xl-5 ${props.imgFirst ? 'order-md-first' : ''}`}>
			<img src={props.img} alt={props.title} className='w-100 custom-rounded' />
		</div>
	</div>
)

const BandSectionals = props => (
	<div>
		{props.sectionals.map((section, i) => <BandSectional {...section} key={i} imgFirst={i%2!==0}/>)}
	</div>
)

export default BandSectionals