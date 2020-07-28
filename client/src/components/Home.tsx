import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'react-typed';
import Scroll from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';

import '../css/home.css';

import * as actions from '../actions';

type Props = {
	fetchHome: Function;
	home: string[];
};

type State = {
	isVisible: boolean;
};

class Home extends Component<Props, State> {
	state = { isVisible: false };
	scroller = Scroll.scroller;

	componentDidMount() {
		this.props.fetchHome();
	}

	onVisibilityChange(isVisible: boolean) {
		this.setState({ isVisible });
	}

	render() {
		if (this.props.home) {
			return (
				<section className='home-wrapper'>
					<div className='home-mask'>
						<VisibilitySensor onChange={this.onVisibilityChange.bind(this)} partialVisibility>
							<div className='d-flex justify-content-center align-items-center flex-column h-100 w-100 text-white'>
								<div className='home-title'>Hello World, I'm Terry Wang</div>
								{this.state.isVisible ? (
									<Typed
										className='home-identity'
										strings={this.props.home}
										typeSpeed={70}
										backSpeed={30}
										backDelay={1500}
										smartBackspace={false}
										loop
									/>
								) : (
									<div />
								)}

								<div
									className='home-go-down'
									onClick={() =>
										this.scroller.scrollTo('about', {
											duration: 1000,
											smooth: 'easeInOutQuint'
										})}
								/>
							</div>
						</VisibilitySensor>
					</div>
				</section>
			);
		} else {
			return <div />;
		}
	}
}

function mapStateToProps(state: { home: string[] }) {
	return {
		home: state.home
	};
}

export default connect(mapStateToProps, actions)(Home);
