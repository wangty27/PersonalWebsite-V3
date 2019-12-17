import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';

import '../css/contact.css';

import * as actions from '../actions';

import SectionTitle from './SectionTitle';
import Footer from './Footer';

type Props = {};

type State = {};

class Contact extends Component<Props, State> {
	render() {
		return (
			<section className='contact-wrapper'>
				<div className='contact-mask'>
					<Container className='contact-content'>
						<SectionTitle>Contact</SectionTitle>
						<div className='contact-methods'>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<div className='contact-method-single mb-5 mb-md-0'>
									<i className='fas fa-envelope contact-method-icon' />
									<div className='font-weight-bold'>Email</div>
								</div>
							</div>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<div className='contact-method-single mb-5 mb-md-0'>
									<i className='fab fa-github contact-method-icon' />
									<div className='font-weight-bold'>GitHub</div>
								</div>
							</div>
							<div className='d-flex flex-column justify-content-center align-items-center'>
								<div className='contact-method-single'>
									<i className='fab fa-linkedin contact-method-icon' />
									<div className='font-weight-bold'>LinkedIn</div>
								</div>
							</div>
						</div>
						<form>
							<div className='contact-form'>
								<div className='contact-form-fields ml-md-4'>
									<input type='text' className='contact-form-input mb-4' placeholder='NAME *' required />
									<input type='email' className='contact-form-input' placeholder='EMAIL *' required />
								</div>
								<div className='contact-form-fields mr-md-4'>
									<textarea className='contact-form-textarea' placeholder='MESSAGE *' required />
								</div>
							</div>
							<div className='w-100 text-center mt-4'>
								<button className='contact-form-submit'>SEND MESSAGE</button>
							</div>
						</form>
					</Container>
					<Footer />
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		contact: state.contact
	};
}

export default connect(mapStateToProps, actions)(Contact);
