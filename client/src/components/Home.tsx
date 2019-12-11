import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'react-typed';
import Scroll from 'react-scroll';

import '../css/home.css';

import * as actions from '../actions';

type Props = {
	fetchHome: Function;
	home: string[];
};

class Home extends Component<Props> {
	scroller = Scroll.scroller;

	componentDidMount() {
		this.props.fetchHome();
	}

	render() {
		var typedStrings: string[] = [];
		if (this.props.home) {
			typedStrings = this.props.home;
		}
		return (
			<section className='home-wrapper'>
				<div className='home-mask'>
					<div className='d-flex justify-content-center align-items-center flex-column h-100 w-100 text-white'>
						<div className='home-title'>Hello World, I'm Terry Wang</div>
						<Typed
							className='home-identity'
							strings={typedStrings}
							typeSpeed={80}
							backSpeed={50}
							backDelay={1750}
							smartBackspace={false}
							loop
						/>
						<div
							className='home-go-down'
							onClick={() =>
								this.scroller.scrollTo('about', {
									duration: 1000,
									smooth: 'easeInOutQuint'
								})}
						/>
					</div>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state: { home: string[] }) {
	return {
		home: state.home
	};
}

export default connect(mapStateToProps, actions)(Home);
