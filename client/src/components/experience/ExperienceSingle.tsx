import React from 'react';
import { Fade } from 'react-reveal';

import '../../css/experience/experienceSingle.css';

type Props = {
	logo: string;
	company: string;
	website: string;
	position: string;
	date: string;
	summary: string[];
};

function ExperienceSingle(props: Props) {
	function renderPoints(point: string, index: number) {
		return (
			<div key={index} className='experience-single-summary-point'>
				<div className='experience-single-summary-point-bullet'>◉</div>
				<p className='experience-single-summary-point-text'>{point}</p>
			</div>
		);
	}

	return (
		<div className='experience-single-wrapper'>
			<Fade bottom>
				<div className='experience-single-info'>
					<a className='experience-single-info-logo' href={props.website}>
						<img className='experience-single-info-logo-img' src={props.logo} alt={`${props.company} logo`} />
					</a>
					<div className='experience-single-info-position'>{props.position}</div>
					<div className='experience-single-info-company'>{props.company}</div>
					<div className='experience-single-info-date'>{props.date}</div>
				</div>
			</Fade>
			<div className='experience-single-path'>
				<div className='experience-single-path-line line-top' />
				<div className='experience-single-path-marker'>
					<img className='experience-single-path-marker-icon' src='/images/marker.svg' alt='marker' />
				</div>
				<div className='experience-single-path-line line-bottom' />
			</div>
			<Fade bottom>
				<div className='experience-single-summary'>
					{props.summary.map((point: string, index: number) => renderPoints(point, index))}
				</div>
			</Fade>
		</div>
	);
}

export default ExperienceSingle;
