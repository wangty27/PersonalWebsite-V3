import React from 'react';

import '../css/gap.css';

type Props = {
	number: number;
};

function Gap(props: Props) {
	return (
		<section className={`gap gap-${props.number}`}>
			<div className='mask' />
		</section>
	);
}

export default Gap;
