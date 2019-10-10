import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Scroll from 'react-scroll';

import '../css/navbar.css';

export default class NavBar extends Component {
	state = { isOpen: false, transparent: true };

	componentDidUpdate() {
		console.log(this.state);
		const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
		if (this.state.isOpen === true && this.state.transparent === true) {
			this.setState({
				transparent: false
			});
		} else if (this.state.isOpen === false && this.state.transparent === false && scrollPos <= 200) {
			this.setState({
				transparent: true
			});
		}
	}

	componentDidMount() {
		this.scroller = Scroll.scroller;

		window.addEventListener('scroll', () => {
			const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
			if (scrollPos > 200 && this.state.transparent !== false) {
				this.setState({ transparent: false });
			} else if (scrollPos <= 200 && this.state.transparent !== true && this.state.isOpen !== true) {
				this.setState({ transparent: true });
			}
		});

		window.addEventListener('resize', () => {
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
					color='dark'
					className={this.state.transparent ? 'bg-transparent' : 'bg-black'}
					fixed='top'
					expand='md'
					dark
				>
					<Container>
						<NavbarBrand href='#home'>
							<img className='logo' src={'http://localhost:8080/static/images/logo.png'} alt='logo' />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<NavLink
										href='#'
										onClick={() =>
											this.scroller.scrollTo('home', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
									>
										HOME
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href='#'
										onClick={() =>
											this.scroller.scrollTo('about', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
									>
										ABOUT
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href='#'
										onClick={() =>
											this.scroller.scrollTo('experience', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
									>
										EXPERIENCE
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href='#'
										onClick={() =>
											this.scroller.scrollTo('projects', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
									>
										PROJECTS
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										href='#'
										onClick={() =>
											this.scroller.scrollTo('contact', {
												duration: 1000,
												smooth: 'easeInOutQuint'
											})}
									>
										CONTACT
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}
