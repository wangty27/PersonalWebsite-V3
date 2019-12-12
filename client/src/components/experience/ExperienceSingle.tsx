import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import '../../css/experience/experienceSingle.css';

type Props = {
	logo: string;
	company: string;
	website: string;
	position: string;
	date: string;
	summary: string[];
};

type State = {
	init: boolean;
	windowWidth: number;
};

class ExperienceSingle extends Component<Props, State> {
	state = { init: false, windowWidth: 0 };

	onVisibilityChange(isVisible: boolean) {
		console.log(isVisible);
		if (!this.state.init && isVisible) {
			this.setState({ init: true });
		}
	}

	renderPoints(point: string, index: number) {
		return (
			<div key={index} className='experience-single-summary-point'>
				<div className='experience-single-summary-point-bullet'>◉</div>
				<p className='experience-single-summary-point-text'>{point}</p>
			</div>
		);
	}

	componentDidMount() {
		this.setState({
			windowWidth: window.innerWidth
		});

		window.addEventListener('resize', () => {
			this.setState({
				windowWidth: window.innerWidth
			});
		});
	}

	render() {
		return (
			<div className='experience-single-wrapper'>
				<VisibilitySensor onChange={this.onVisibilityChange.bind(this)} partialVisibility>
					<div
						className={
							this.state.init ? this.state.windowWidth >= 768 ? (
								'animated fadeInLeft'
							) : (
								'animated fadeInUp'
							) : (
								'invisible'
							)
						}
					>
						<div className='experience-single-info'>
							<a className='experience-single-info-logo' href={this.props.website}>
								<img
									className='experience-single-info-logo-img'
									src={this.props.logo}
									alt={`${this.props.company} logo`}
								/>
							</a>
							<div className='experience-single-info-position'>{this.props.position}</div>
							<div className='experience-single-info-company'>{this.props.company}</div>
							<div className='experience-single-info-date'>{this.props.date}</div>
						</div>
					</div>
				</VisibilitySensor>
				<div className='experience-single-path'>
					<div className='experience-single-path-line line-top' />
					<div className='experience-single-path-marker'>
						<img className='experience-single-path-marker-icon' src='/images/marker.svg' alt='marker' />
					</div>
					<div className='experience-single-path-line line-bottom' />
				</div>
				<div
					className={
						this.state.init ? this.state.windowWidth >= 768 ? 'animated fadeInRight' : 'animated fadeInUp' : 'invisible'
					}
				>
					<div className='experience-single-summary'>
						{this.props.summary.map((point: string, index: number) => this.renderPoints(point, index))}
					</div>
				</div>
			</div>
		);
	}
}

export default ExperienceSingle;
