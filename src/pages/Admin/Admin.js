import React from 'react'
import EditEventsTable from './components/EditEventsTable'

const Admin = () => (
	<section id='admin'>
		<div className='container-fluid' id='admin-container'>
			<div className='row mb-5'>
				<div className='col-12 mb-4'>
					<h1 className='vocalists-title'>Admin Page</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-12 col-md-6'>
					<EditEventsTable/>
				</div>
			</div>
		</div>
	</section>
)

export default Admin