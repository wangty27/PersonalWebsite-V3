import React from 'react';
import { Fade } from 'react-reveal';

import '../../css/about/aboutSkill.css';

type Props = {
	name: string;
	confidence: number;
	color: string;
};

function AboutSkill(props: Props) {
	return (
		<Fade bottom>
			<div className='skill-wrapper'>
				<div className='skill-name-background' style={{ background: props.color }}>
					<div className='skill-name-text'>{props.name}</div>
				</div>
				<div className='skill-confidence'>
					<div className='skill-confidence-bar' style={{ background: props.color, width: `${props.confidence}%` }} />
				</div>
				<div className='skill-confidence-number'>{props.confidence}%</div>
			</div>
		</Fade>
	);
}

export default AboutSkill;
