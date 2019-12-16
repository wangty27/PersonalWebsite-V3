import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import '../../css/about/aboutSkill.css';

type Props = {
	skills: Array<{
		name: string;
		logo: string;
	}>;
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

	renderSingle(name: string, logo: string, index: number) {
		return (
			<div
				className={this.state.init ? 'animated fadeInUp' : 'invisible'}
				style={{ animationDelay: `${index * 25}ms` }}
				key={index}
			>
				<div className='about-skill-single'>
					<img className='about-skill-single-logo' src={logo} alt={name} />
					<div className='about-skill-single-name'>{name}</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<VisibilitySensor onChange={this.onVisibilityChange.bind(this)} partialVisibility>
				<div className='about-skill-wrapper'>
					{this.props.skills.map((skill: { name: string; logo: string }, index: number) =>
						this.renderSingle(skill.name, skill.logo, index)
					)}
				</div>
			</VisibilitySensor>
		);
	}
}

export default AboutSkill;
