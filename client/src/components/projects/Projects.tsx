import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import '../../css/projects/projects.css';

import * as actions from '../../actions';

import SectionTitle from '../SectionTitle';
import ProjectsSingle from './ProjectsSingle';

type Project = {
	name: string;
	image: string;
	summary: string;
	tech: string;
	live: string;
	github: string;
};

type Props = {
	fetchProjects: Function;
	projects: Array<Project>;
};

type State = {};

class Projects extends Component<Props, State> {
	componentDidMount() {
		this.props.fetchProjects();
	}

	render() {
		if (this.props.projects) {
			return (
				<section className='projects-wrapper'>
					<Container>
						<SectionTitle>Projects</SectionTitle>
						<div className='project-single-wrapper'>
							{this.props.projects.map((project: Project, index: number) => (
								<ProjectsSingle key={index} {...project} />
							))}
						</div>
					</Container>
				</section>
			);
		} else {
			return <div />;
		}
	}
}

function mapStateToProps(state: { projects: Array<String> }) {
	return {
		projects: state.projects
	};
}

export default connect(mapStateToProps, actions)(Projects);
