import React from 'react'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

const Info = () => (
	<section id='info'>
		<div className='container' id='info-container'>
			<div className='row justify-content-end '>
				<div className='col-12 col-lg-10 col-xl-9'>
					<h1 className='hi'>Hi!</h1>
					<p className='info-text'>
						We're the Moonlight Swing Orchestra, a group of musicians, insrumentalists,
						vocalists, and professionals who all share the same love
						of performing big band swing music.
					</p>
					<p className='info-text'>
						We play for you for whatever the occasion: dances, receptions, fund raisers, private parties,
						and any other event that calls for great live music.</p>
						<p>Hear the great sounds of 
						<strong> Jack Dorsy</strong>,
						<strong> Glen Miller</strong>,
						<strong> Duke Ellington</strong>,
						<strong> Artie Shaw</strong>, 
						and more. We even admit to throwing in an occasional modern hit as well! 
					</p>
				</div>
			</div>
			<div className='row justify-content-center align-items-center mt-4'>
				<div className='col-6 col-md-4 d-flex justify-content-center'>
					<ButtonLink className='intro-button' color='secondary' to='members'>Meet the Band</ButtonLink>
				</div>
				<div className='col-6 col-md-4 d-flex justify-content-center'>
					<ButtonLink className='intro-button' color='secondary' to='contact'>Book Now!</ButtonLink>
				</div>
			</div>
		</div>
	</section>
)

export default Info