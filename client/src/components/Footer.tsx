import React from 'react';

const Footer: React.FC = () => {
	var date = new Date();
	var year = date.getFullYear();
	return (
		<div className='d-flex flex-column justify-content-center align-items-center' style={{ paddingBottom: '20px' }}>
			<div style={{ fontSize: '12px', color: '#ccc' }}>© 2017-{year} Terry Wang. All Rights Reserved.</div>
		</div>
	);
};

export default Footer;
