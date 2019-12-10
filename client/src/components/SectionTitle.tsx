import React from 'react';

type Props = {
	children: any;
};

function SectionTitle(props: Props) {
	return (
		<div className='section-title text-center' style={{ marginBottom: '50px' }}>
			<h1 style={{ color: '#fff' }}>{props.children}</h1>
			<div className='section-line' style={{ background: '#ffd54f', width: '80px', height: '3px', margin: 'auto' }} />
		</div>
	);
}

export default SectionTitle;
