import React from 'react'
import {Button} from 'reactstrap'

export default class EditEventsTable extends React.Component {
	state = {
		events: [
			{
				start: new Date(2018, 6-1, 30, 17, 0, 0),
				end:   new Date(2018, 6-1, 30, 20, 0, 0),
				venue: 'Monroe Community Senior Center',
				name: 'Swingin\' to Summer',
				address: '276 Sky River Parkway, Monroe, WA 98272',
			},
			{
				start: new Date(2018, 11-1, 24, 19, 0, 0),
				end:   new Date(2018, 11-1, 24, 21, 0, 0),
				venue: 'Crossroads Bellevue Market Stage',
				name: '',
				address: '15600 NE 8th St, Bellevue, WA 98007',
			},
			{
				start: new Date(2018, 7-1, 21, 19, 0, 0),
				end:   new Date(2018, 7-1, 21, 21, 0, 0),
				venue: 'Crossroads Bellevue Market Stage',
				name: '',
				address: '15600 NE 8th St, Bellevue, WA 98007',
			},
			{
				start: new Date(2018, 8-1, 27, 17, 30, 0),
				end:   new Date(2018, 8-1, 27, 20, 30, 0),
				venue: 'Evergreen State Fair Xfinity Courtyard Stage',
				name: '',
				address: '14405 179th Ave SE, Monroe, WA 98272',
			},
			{
				start: new Date(2018, 9-1, 22, 17, 0, 0),
				end:   new Date(2018, 9-1, 22, 20, 0, 0),
				venue: 'Monroe Community Senior Center',
				name: 'Autumn Social',
				address: '276 Sky River Parkway, Monroe, WA, 98272',
			},
			{
				start: new Date(2018, 12-1, 8, 13, 0, 0),
				end:   new Date(2018, 12-1, 8, 15, 30, 0),
				venue: 'Monroe Community Senior Center',
				name: 'Swing into Christmas',
				address: '276 Sky River Parkway, Monroe, WA, 98272',
			},
			{
				start: new Date(2018, 12-1, 31, 18, 30, 0),
				end:   new Date(2018, 12-1, 31, 21, 30, 0),
				venue: 'Emerald Heights',
				name: 'New Years Eve Gala (Private Event)',
				address: '276 Sky River Parkway, Monroe, WA, 98272',
			},
		],
		center: undefined,
	}

	render() {
		return (
			<table className='table'>
				
			</table>
		)
	}
}