import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import '../../css/about/aboutSkill.css';

type Props = {
	name: string;
	confidence: number;
	color: string;
};

type State = {
	init: boolean;
};

class AboutSkill extends Component<Props, State> {
	state = { init: false };

	onVisibilityChange(isVisible: boolean) {
		if (!this.state.init && isVisible) {
			this.setState({ init: true });
		}
	}

	render() {
		return (
			<VisibilitySensor onChange={this.onVisibilityChange.bind(this)} partialVisibility>
				<div className={this.state.init ? 'animated fadeInUp' : 'invisible'}>
					<div className='skill-wrapper'>
						<div className='skill-name-background' style={{ background: this.props.color }}>
							<div className='skill-name-text'>{this.props.name}</div>
						</div>
						<div className='skill-confidence'>
							<div
								className='skill-confidence-bar'
								style={{ background: this.props.color, width: `${this.props.confidence}%` }}
							/>
						</div>
						<div className='skill-confidence-number'>{this.props.confidence}%</div>
					</div>
				</div>
			</VisibilitySensor>
		);
	}
}

export default AboutSkill;
