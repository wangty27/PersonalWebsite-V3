import React from 'react';
import { Container } from 'react-bootstrap';

import '../css/notFound404.css';

type Props = {};

const NotFound404: React.FC<Props> = (props: Props) => {
	return (
		<div className='notfound404-wrapper'>
			<div className='notfound404-overlay'>
				<Container className='h-100 w-100 d-flex flex-column justify-content-center align-items-center'>
					<img className='notfound404-logo' src='/icons/logo.png' alt='logo' />
					<h1 className='text-center'>404 Not Found</h1>
					<h5 className='text-center'>Sorry, the requested URL {window.location.pathname} was not found.</h5>
					<a className='notfound404-link btn btn-outline-light' href='/'>
						<h5 className='m-0'>Go back to home page</h5>
					</a>
				</Container>
			</div>
		</div>
	);
};

export default NotFound404;
