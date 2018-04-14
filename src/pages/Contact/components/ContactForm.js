import React from 'react'
import {Button} from 'reactstrap'

const extract = (str, pattern) => (str.match(pattern) || []).pop() || ''

export default class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		}

		this.handleNameChange = this.handleNameChange.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handleMessageChange = this.handleMessageChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.submitEnabled = this.submitEnabled.bind(this)
	}

	handleNameChange(event) {
		this.setState({
			name: extract(event.target.value, '[0-9a-zA-Z ]+')
		})
	}

	handleEmailChange(event) {
		this.setState({
			email: event.target.value
		})
	}

	handleMessageChange(event) {
		this.setState({
			message: event.target.value
		})
	}

	async handleSubmit(event) {
		event.preventDefault()
		await this.sendEmail()
	}

	async sendEmail() {
		try {
			await fetch('/api/email', {
				method: 'post',
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(this.state)
			})
			this.setState({
				name: '',
				email: '',
				message: '',
			})
		} catch(err) {
			console.error(err)
		}
	}

	submitEnabled() {
		return !!this.state.name.trim() && !!this.state.email.trim() && !!this.state.message.trim()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit} className={this.props.className}>
				<div className='form-group'>
					<label htmlFor='name' className='mb-0'>Name</label>
					<input
						type='text'
						value={this.state.name}
						onChange={this.handleNameChange}
						className='form-control custom-rounded'
						id='name'
						placeholder='Enter Name'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email' className='mb-0'>Email</label>
					<input
						type='email'
						value={this.state.email}
						onChange={this.handleEmailChange}
						className='form-control custom-rounded'
						id='email'
						placeholder='Enter Email'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='message' className='mb-0'>Message</label>
					<textarea
						value={this.state.message}
						onChange={this.handleMessageChange}
						className='form-control custom-rounded'
						id='message'
						rows='3'
						placeholder='Tell us about your event, and your needs'
					>
					</textarea>
				</div>
				<Button type='submit' disabled={!this.submitEnabled()} className='intro-button' style={{borderRadius: 500}}>Send</Button>
			</form>
		);
	}
}