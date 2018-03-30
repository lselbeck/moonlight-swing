import React from 'react'
import WholeBand from '../../pics/whole-band.jpg'
import { Tooltip } from 'reactstrap'
import PlayButton from '../../components/PlayButton/PlayButton'

export default class Landing extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tooltipOpen: false,
			playing: false,
		}

		this.toggleTooltip = this.toggleTooltip.bind(this)
	}

	toggleTooltip() {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		})
	}

	render() {
		return (
			<section id='landing'>
				<div className='container-fluid' id='landing-container'>
					<div className='row justify-content-center'>
						<div className='col-9 col-md-4 order-2 order-md-1'>
							<img className='whole-band img-fluid rounded-circle' src={WholeBand} alt='Whole Band'></img>
						</div>
						<div className='col-12 col-md-8 order-1 order-md-2'>
							<div className='row align-items-center'>
								<h1 className='col-12 title-moonlight'>Moonlight</h1>
								<div className='col-8'>
									<span className='title-swing-orchestra'>Swing Orchestra</span>
								</div>
								<div className='col-4'>
									<PlayButton id='play-button' playing={false} playerControls={this.props.playerControls}/>
{/*									<Tooltip placement='bottom' isOpen={this.state.tooltipOpen} target='play-button' toggle={this.toggleTooltip} autohide={false}>
										Take a listen!
									</Tooltip>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}