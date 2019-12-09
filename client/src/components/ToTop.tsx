import React, { Component } from 'react';
import Scroll from 'react-scroll';

import '../css/toTop.css';

class ToTop extends Component {
	state = { show: false };
	scroller = Scroll.scroller;

	componentDidMount() {
		window.addEventListener('scroll', () => {
			const scrollPos: number = document.body.scrollTop || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			if (scrollPos > 1.5 * windowHeight && !this.state.show) {
				this.setState({
					show: true
				});
			} else if (scrollPos <= 1.5 * windowHeight && this.state.show) {
				this.setState({
					show: false
				});
			}
		});
	}

	render() {
		return this.state.show ? (
			<div
				className='to-top-btn'
				onClick={() =>
					this.scroller.scrollTo('home', {
						duration: 1000,
						smooth: 'easeInOutQuint'
					})}
			>
				<img src='/images/double-arrow-down.png' className='to-top-img' />
			</div>
		) : (
			''
		);
	}
}

export default ToTop;
