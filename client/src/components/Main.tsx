import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import LoadingMask from './LoadingMask';
import NavBar from './NavBar';
import ToTop from './ToTop';
import Gap from './Gap';
import Home from './Home';
import About from './about/About';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Contact from './Contact';

var Element = Scroll.Element;

type Props = {
	home: any;
	about: any;
	experience: any;
	projects: any;
	contact: any;
};

type State = {
	homeLoaded: boolean;
	aboutLoaded: boolean;
	experienceLoaded: boolean;
	projectsLoaded: boolean;
	contactLoaded: boolean;
	loaded: boolean;
	hideLoading: boolean;
	loadingClassNames: string;
};

class Main extends Component<Props, State> {
	state = {
		homeLoaded: false,
		aboutLoaded: false,
		experienceLoaded: false,
		projectsLoaded: false,
		contactLoaded: false,
		loaded: false,
		hideLoading: false,
		loadingClassNames: ''
	};

	componentDidUpdate() {
		const { home, about, experience, projects, contact } = this.props;
		if (!this.state.loaded && home && about && experience && projects && contact) {
			this.setState({ loaded: true });
			this.setState({ loadingClassNames: 'fadeOut' });
			setTimeout(() => {
				this.setState({ hideLoading: true });
			}, 500);
		}
	}

	childLoaded(name: string) {
		console.log(`${name} loaded`);
		let stateKey = `${name}Loaded`;
		let newState = {};
		newState[stateKey] = true;
		this.setState(newState);
	}

	loadingFadeOut() {}

	render() {
		return (
			<React.Fragment>
				{this.state.hideLoading ? '' : <LoadingMask className={this.state.loadingClassNames} />}
				<NavBar />
				<Element id='home' name='home'>
					<Home childLoaded={this.childLoaded.bind(this)} />
				</Element>
				<Element id='about' name='about'>
					<About childLoaded={this.childLoaded.bind(this)} />
				</Element>
				<Gap number={1} />
				<Element id='experience' name='experience'>
					<Experience childLoaded={this.childLoaded.bind(this)} />
				</Element>
				<Gap number={2} />
				<Element id='projects' name='projects'>
					<Projects childLoaded={this.childLoaded.bind(this)} />
				</Element>
				<Element id='contact' name='contact'>
					<Contact childLoaded={this.childLoaded.bind(this)} />
				</Element>
				<ToTop />
			</React.Fragment>
		);
	}
}

function mapStateToProps(state: any) {
	const { home, about, experience, projects, contact } = state;
	return { home, about, experience, projects, contact };
}

export default connect(mapStateToProps)(Main);
