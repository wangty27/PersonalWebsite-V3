import React from 'react';

import '../css/loadingMask.css';

type Props = {
	className?: string;
};

const LoadingMask: React.FC<Props> = (props: Props) => {
	return (
		<div className={`${props.className} loading-mask`}>
			<img src='/icons/logo.png' className='loading-pic' alt='logo' />
		</div>
	);
};

export default LoadingMask;
