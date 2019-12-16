import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import '../../css/about/about.css';

import * as actions from '../../actions';

import SectionTitle from '../SectionTitle';
import AboutSkill from './AboutSkill';

type AboutProps = {
	description: string;
	keywords: string[];
	skills: Array<{ name: string; logo: string }>;
	resume: string;
	portrait: string;
};

type Props = {
	fetchAbout: Function;
	about: AboutProps;
};

class About extends Component<Props> {
	componentDidMount() {
		this.props.fetchAbout();
	}

	renderKeywords(keywords: string, index: number) {
		return (
			<p key={index}>
				<span style={{ color: '#ffd54f', marginRight: '8px' }}>◉</span> {keywords}
			</p>
		);
	}

	render() {
		if (this.props.about) {
			return (
				<section className='about-wrapper'>
					<Container>
						<SectionTitle>About</SectionTitle>
						<div className='about-portrait'>
							<img src={this.props.about.portrait} className='about-portrait-img img-fluid' alt='Terry Wang' />
						</div>
						<h5>Hello World!</h5>
						<p className='about-description'>{this.props.about.description}</p>
						<p>I describe myself as a:</p>
						{this.props.about.keywords.map((words: string, index: number) => this.renderKeywords(words, index))}
						<p style={{ color: '#fff' }}>
							Check out{' '}
							<a href={this.props.about.resume} className='about-resume'>
								my resume
							</a>
						</p>
						<h5 style={{ marginBottom: '16px' }}>SKILLS</h5>
						<AboutSkill skills={this.props.about.skills} />
					</Container>
				</section>
			);
		} else {
			return <div />;
		}
	}
}

function mapStateToProps(state: { about: AboutProps }) {
	return {
		about: state.about
	};
}

export default connect(mapStateToProps, actions)(About);
