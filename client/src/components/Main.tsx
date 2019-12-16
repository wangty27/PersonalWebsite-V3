import React, { Component } from 'react';
import Scroll from 'react-scroll';

import NavBar from './NavBar';
import ToTop from './ToTop';
import Gap from './Gap';
import Home from './Home';
import About from './about/About';
import Experience from './experience/Experience';

var Element = Scroll.Element;

class Main extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Element id='home' name='home'>
					<Home />
				</Element>
				<Element id='about' name='about'>
					<About />
				</Element>
				<Gap number={1} />
				<Element id='experience' name='experience'>
					<Experience />
				</Element>
				<Gap number={2} />
				<Element id='projects' name='projects' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>projects</h1>
				</Element>
				<Element id='contact' name='contact' style={{ height: '100vh', paddingTop: '100px' }}>
					<h1 style={{ color: 'white' }}>contact</h1>
				</Element>
				<ToTop />
			</React.Fragment>
		);
	}
}

export default Main;
