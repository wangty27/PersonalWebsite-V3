import React from 'react';

const Admin: React.FC = () => {
	return (
		<div
			className='d-flex flex-column justify-content-center align-items-center'
			style={{ height: '100vh', width: '100vw', color: '#fff' }}
		>
			<i className='fas fa-exclamation-circle mb-5' style={{ fontSize: '150px' }} />
			<h2 className='text-center'>This area is restricted.</h2>
		</div>
	);
};

export default Admin;
