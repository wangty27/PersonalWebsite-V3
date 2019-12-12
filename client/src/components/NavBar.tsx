import React, { Component } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Scroll from 'react-scroll';

import '../css/navbar.css';

export default class NavBar extends Component {
	state = { isOpen: false, transparent: true, scrollPos: 0 };
	scroller = Scroll.scroller;
	homePos: number = 0;
	aboutPos: number = 1;
	experiencePos: number = 1;
	projectsPos: number = 1;
	contactPos: number = 1;

	updateElementOffset() {
		var newHomePos: number = document.getElementById('home')!.offsetTop;
		var newAboutPos: number = document.getElementById('about')!.offsetTop;
		var newExperiencePos: number = document.getElementById('experience')!.offsetTop;
		var newProjectsPos: number = document.getElementById('projects')!.offsetTop;
		var newContactPos: number = document.getElementById('contact')!.offsetTop;
		if (
			this.homePos !== newHomePos ||
			this.aboutPos !== newAboutPos ||
			this.experiencePos !== newExperiencePos ||
			this.projectsPos !== newProjectsPos ||
			this.contactPos !== newContactPos
		) {
			this.homePos = newHomePos;
			this.aboutPos = newAboutPos;
			this.experiencePos = newExperiencePos;
			this.projectsPos = newProjectsPos;
			this.contactPos = newContactPos;
			const scrollPos: number = document.body.scrollTop || document.documentElement.scrollTop;
			this.setState({ scrollPos });
		}
	}

	componentDidUpdate() {
		this.updateElementOffset();
		if (this.state.isOpen === true && this.state.transparent === true) {
			this.setState({
				transparent: false
			});
		} else if (this.state.isOpen === false && this.state.transparent === false && this.state.scrollPos <= 200) {
			this.setState({
				transparent: true
			});
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', () => {
			const scrollPos: number = document.body.scrollTop || document.documentElement.scrollTop;
			this.setState({ scrollPos });
			if (scrollPos > 200 && this.state.transparent !== false) {
				this.setState({ transparent: false });
			} else if (scrollPos <= 200 && this.state.transparent !== true && this.state.isOpen !== true) {
				this.setState({ transparent: true });
			}
		});

		window.addEventListener('resize', () => {
			this.homePos = document.getElementById('home')!.offsetTop;
			this.aboutPos = document.getElementById('about')!.offsetTop;
			this.experiencePos = document.getElementById('experience')!.offsetTop;
			this.projectsPos = document.getElementById('projects')!.offsetTop;
			this.contactPos = document.getElementById('contact')!.offsetTop;
			console.log(this.homePos, this.aboutPos, this.experiencePos, this.projectsPos, this.contactPos);
			if (window.innerWidth > 768) {
				this.setState({ isOpen: false });
			}
		});
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		return (
			<div>
				<Navbar
					id='navbar'
					collapseOnSelect
					expand='md'
					variant='dark'
					fixed='top'
					expanded={this.state.isOpen}
					onToggle={() => this.toggle()}
					className={this.state.transparent ? 'bg-transparent' : 'bg-black'}
				>
					<Container>
						<Navbar.Brand
							href='#'
							onClick={() =>
								this.scroller.scrollTo('home', {
									duration: 1000,
									smooth: 'easeInOutQuint'
								})}
						>
							{/* TODO: remove server address */}
							<img className='logo' src='http://localhost:1127/static/images/logo.png' alt='logo' />
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='collapse-nav' />
						<Navbar.Collapse id='collapse-nav'>
							<Nav className='ml-auto'>
								<Nav.Item>
									<Nav.Link
										href='#'
										onClick={() =>
											this.scroller.scrollTo('home', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
										className={
											this.state.scrollPos >= this.homePos && this.state.scrollPos < this.aboutPos ? 'in-view' : ''
										}
									>
										HOME
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href='#'
										onClick={() =>
											this.scroller.scrollTo('about', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
										className={
											this.state.scrollPos >= this.aboutPos && this.state.scrollPos < this.experiencePos ? (
												'in-view'
											) : (
												''
											)
										}
									>
										ABOUT
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href='#'
										onClick={() =>
											this.scroller.scrollTo('experience', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
										className={
											this.state.scrollPos >= this.experiencePos && this.state.scrollPos < this.projectsPos ? (
												'in-view'
											) : (
												''
											)
										}
									>
										EXPERIENCE
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href='#'
										onClick={() =>
											this.scroller.scrollTo('projects', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
										className={
											this.state.scrollPos >= this.projectsPos && this.state.scrollPos < this.contactPos ? (
												'in-view'
											) : (
												''
											)
										}
									>
										PROJECTS
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link
										href='#'
										onClick={() =>
											this.scroller.scrollTo('contact', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
										className={this.state.scrollPos >= this.contactPos ? 'in-view' : ''}
									>
										CONTACT
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
