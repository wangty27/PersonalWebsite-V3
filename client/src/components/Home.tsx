import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typed from 'react-typed';
import Scroll from 'react-scroll';

import '../css/home.css';

import * as actions from '../actions';

type Props = {
	fetchHome: any;
	home: any;
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
			<div className='home-wrapper'>
				<div className='home-mask'>
					<div className='d-flex justify-content-center align-items-center flex-column h-100 w-100 text-white'>
						<h1 className='home-title'>Hello World, I'm Terry Wang</h1>
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
			</div>
		);
	}
}

function mapStateToProps(state: any) {
	return {
		home: state.home
	};
}

export default connect(mapStateToProps, actions)(Home);
