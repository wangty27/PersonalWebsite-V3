import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import '../../css/experience/experienceSingle.css';

type Props = {
	logo: string;
	company: string;
	website: string;
	position: string;
	date: string;
	location: string;
	index: number;
};

type State = {
	init: boolean;
	windowWidth: number;
};

class ExperienceSingle extends Component<Props, State> {
	state = { init: false, windowWidth: 0 };

	onVisibilityChange(isVisible: boolean) {
		if (!this.state.init && isVisible) {
			this.setState({ init: true });
		}
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
			<VisibilitySensor onChange={this.onVisibilityChange.bind(this)} partialVisibility>
				<div className='experience-single-wrapper'>
					<div
						className={this.props.index % 2 === 0 ? 'experience-single-info info-l' : 'experience-single-info info-r'}
					>
						<div className={this.state.init ? 'animated fadeInUp' : 'invisible'}>
							<div className='experience-single-info-position'>{this.props.position}</div>
							<div className='experience-single-info-company'>{this.props.company}</div>
							<div className='experience-single-info-location'>{this.props.location}</div>
							<div className='experience-single-info-date'>{this.props.date}</div>
						</div>
					</div>
					<div className='experience-single-path'>
						<div className='experience-single-path-line' />
						<a
							href={this.props.website}
							className={
								this.state.init ? (
									'experience-single-path-logo animated fadeInUp'
								) : (
									'experience-single-path-logo invisible'
								)
							}
						>
							<img className='experience-single-path-logo-img' src={this.props.logo} alt={this.props.company} />
						</a>
					</div>
					<div className={this.props.index % 2 !== 0 ? 'info-l' : 'info-r'} />
				</div>
			</VisibilitySensor>
		);
	}
}

export default ExperienceSingle;
