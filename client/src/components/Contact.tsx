import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Alert, Spinner } from 'react-bootstrap';

import '../css/contact.css';

import * as actions from '../actions';

import SectionTitle from './SectionTitle';
import Footer from './Footer';

type Props = {
	fetchContact: Function;
	sendContactMessage: Function;
	resetContactMessage: Function;
	contact: {
		email: string;
		github: string;
		linkedin: string;
	};
	contactMsg: {
		error: boolean;
		message: string;
		reset: boolean;
	};
};

type State = {
	name: string;
	email: string;
	message: string;
	msgPending: boolean;
	msgError: boolean;
	msgAlert: string;
	msgShowAlert: boolean;
};

class Contact extends Component<Props, State> {
	state = {
		name: '',
		email: '',
		message: '',
		msgPending: false,
		msgError: false,
		msgAlert: '',
		msgShowAlert: false
	};

	componentDidMount() {
		this.props.fetchContact();
	}

	componentDidUpdate() {
		if (!this.props.contactMsg.reset) {
			this.props.resetContactMessage();
			if (this.props.contactMsg.error) {
				this.setState({
					msgPending: false,
					msgError: true,
					msgAlert: 'Your message could not be sent. Please try again later!',
					msgShowAlert: true
				});
			} else {
				this.setState({
					name: '',
					email: '',
					message: '',
					msgPending: false,
					msgError: false,
					msgAlert: 'Your message has been sent. I will respond as soon as possible!',
					msgShowAlert: true
				});
			}
		}
	}

	onInputChange(value: string, field: string) {
		this.setState(() => {
			let newState: any = {};
			newState[field] = value;
			return newState;
		});
	}

	onFormSubmit(e: { preventDefault: Function }) {
		e.preventDefault();
		this.props.sendContactMessage(this.state.name, this.state.email, this.state.message);
		this.setState({
			msgPending: true,
			msgError: false,
			msgAlert: '',
			msgShowAlert: false
		});
	}

	renderContactForm() {
		return (
			<form onSubmit={this.onFormSubmit.bind(this)}>
				<div className='contact-form'>
					<div className='contact-form-fields ml-md-4'>
						<input
							type='text'
							className='contact-form-input mb-4'
							placeholder='NAME *'
							value={this.state.name}
							onChange={e => this.onInputChange(e.target.value, 'name')}
							required
						/>
						<input
							type='email'
							className='contact-form-input'
							placeholder='EMAIL *'
							value={this.state.email}
							onChange={e => this.onInputChange(e.target.value, 'email')}
							required
						/>
					</div>
					<div className='contact-form-fields mr-md-4'>
						<textarea
							className='contact-form-textarea'
							placeholder='MESSAGE *'
							value={this.state.message}
							onChange={e => this.onInputChange(e.target.value, 'message')}
							required
						/>
					</div>
				</div>
				{this.state.msgShowAlert ? (
					<div className='w-100 text-center mt-3' style={{ paddingLeft: '10px', paddingRight: '10px' }}>
						<Alert
							className='ml-md-4 mr-md-4'
							variant={this.state.msgError ? 'danger' : 'success'}
							onClose={() => this.setState({ msgShowAlert: false })}
							dismissible
						>
							{this.state.msgAlert}
						</Alert>
					</div>
				) : (
					''
				)}
				<div className='w-100 text-center mt-4'>
					<button type='submit' className='contact-form-submit' disabled={this.state.msgPending}>
						{this.state.msgPending ? (
							<div>
								<Spinner
									className='mr-2'
									as='span'
									animation='grow'
									size='sm'
									role='status'
									aria-hidden='true'
									variant='light'
								/>
								Sending...
							</div>
						) : (
							'SEND MESSAGE'
						)}
					</button>
				</div>
			</form>
		);
	}

	render() {
		if (this.props.contact) {
			return (
				<section className='contact-wrapper'>
					<div className='contact-mask'>
						<Container className='contact-content'>
							<SectionTitle>Contact</SectionTitle>
							<div className='contact-methods'>
								<div className='d-flex flex-column justify-content-center align-items-center'>
									<div
										className='contact-method-single mb-5 mb-md-0'
										onClick={() => (window.location.href = `mailto:${this.props.contact.email}`)}
									>
										<i className='fas fa-envelope contact-method-icon' />
										<div className='font-weight-bold'>Email</div>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-center align-items-center'>
									<div
										className='contact-method-single mb-5 mb-md-0'
										onClick={() => (window.location.href = this.props.contact.github)}
									>
										<i className='fab fa-github contact-method-icon' />
										<div className='font-weight-bold'>GitHub</div>
									</div>
								</div>
								<div className='d-flex flex-column justify-content-center align-items-center'>
									<div
										className='contact-method-single'
										onClick={() => (window.location.href = this.props.contact.linkedin)}
									>
										<i className='fab fa-linkedin contact-method-icon' />
										<div className='font-weight-bold'>LinkedIn</div>
									</div>
								</div>
							</div>
							{this.renderContactForm()}
						</Container>
						<Footer />
					</div>
				</section>
			);
		} else {
			return <div />;
		}
	}
}

function mapStateToProps(state: {
	contact: { email: string; github: string; linkedin: string };
	contactMsg: { error: boolean; message: string; reset: boolean };
}) {
	return {
		contact: state.contact,
		contactMsg: state.contactMsg
	};
}

export default connect(mapStateToProps, actions)(Contact);
