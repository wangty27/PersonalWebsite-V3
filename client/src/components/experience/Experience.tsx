import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import '../../css/experience/experience.css';

import * as actions from '../../actions';

import SectionTitle from '../SectionTitle';
import ExperienceSingle from './ExperienceSingle';

type ExperienceProps = Array<{
	logo: string;
	company: string;
	website: string;
	position: string;
	date: string;
	summary: string[];
}>;

type Props = {
	fetchExperience: Function;
	experience: ExperienceProps;
};

class Experience extends Component<Props> {
	componentDidMount() {
		this.props.fetchExperience();
	}

	render() {
		console.log(this.props);
		if (this.props.experience) {
			return (
				<section className='experience-wrapper'>
					<Container>
						<SectionTitle>Experience</SectionTitle>
						<div className='experience-path-line'>
							<div className='experience-path-line-l' />
							<div className='experience-path-line-m'>
								<div className='experience-path-line-head' />
							</div>
							<div className='experience-path-line-r' />
						</div>
						{this.props.experience.map(
							(
								single: {
									logo: string;
									company: string;
									website: string;
									position: string;
									date: string;
									summary: string[];
								},
								index: number
							) => <ExperienceSingle key={index} {...single} />
						)}
						<div className='experience-path-line'>
							<div className='experience-path-line-l' />
							<div className='experience-path-line-m'>
								<div className='experience-path-line-tail' />
							</div>
							<div className='experience-path-line-r' />
						</div>
					</Container>
				</section>
			);
		} else {
			return <div />;
		}
	}
}

function mapStateToProps(state: { experience: ExperienceProps }) {
	return {
		experience: state.experience
	};
}

export default connect(mapStateToProps, actions)(Experience);
