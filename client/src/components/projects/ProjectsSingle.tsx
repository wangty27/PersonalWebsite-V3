import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import VisibilitySensor from 'react-visibility-sensor';

import '../../css/projects/projectsSingle.css';

type Props = {
	name: string;
	image: string;
	summary: string;
	tech: string;
	live: string;
	github: string;
};

type State = {
	init: boolean;
	flipped: boolean;
};

class ProjectsSingle extends Component<Props, State> {
	state = { init: false, flipped: false };

	onVisibilityChange(isVisible: boolean) {
		if (!this.state.init && isVisible) {
			this.setState({ init: true });
		}
	}

	render() {
		return (
			<VisibilitySensor onChange={this.onVisibilityChange.bind(this)} partialVisibility>
				<div className={this.state.init ? 'animated fadeInUp project-single-card' : 'invisible project-single-card'}>
					<Card className={this.state.flipped ? 'project-single-card-inner flipped' : 'project-single-card-inner'}>
						<div className='project-single-card-front d-flex flex-column'>
							<Card.Img variant='top' className='project-single-card-img' src={this.props.image} alt={'t'} />
							<Card.Body style={{ height: '125px', flex: '0 1 auto' }}>
								<Card.Title className='text-center text-white'>
									<h4>{this.props.name}</h4>
								</Card.Title>
								<Card.Text className='text-center'>{this.props.tech}</Card.Text>
							</Card.Body>
							<Card.Body className='pt-0 pb-0'>
								<a className='w-100 mb-2 btn btn-outline-light' href={this.props.github}>
									<i className='fab fa-github mr-2' />GitHub
								</a>
								{this.props.live ? (
									<a className='w-100 btn btn-outline-light' href={this.props.live}>
										<i className='fas fa-globe-americas mr-2' />Live
									</a>
								) : (
									''
								)}
							</Card.Body>
							<Card.Body
								style={{ flex: '0 1 auto', cursor: 'pointer' }}
								onClick={() => this.setState({ flipped: !this.state.flipped })}
							>
								<small className='w-100 d-flex justify-content-center align-items-center'>
									<i className='fas fa-redo mr-2' /> Click for details
								</small>
							</Card.Body>
						</div>
						<div className='project-single-card-back d-flex flex-column'>
							<Card.Body className=''>
								<Card.Title className='text-center text-white'>
									<h4>{this.props.name}</h4>
								</Card.Title>
								<Card.Text>{this.props.summary}</Card.Text>
							</Card.Body>
							<Card.Body
								style={{ flex: '0 1 auto', cursor: 'pointer' }}
								onClick={() => this.setState({ flipped: !this.state.flipped })}
							>
								<small className='w-100 d-flex justify-content-center align-items-center'>
									<i className='fas fa-redo flipped mr-2' /> Back
								</small>
							</Card.Body>
						</div>
					</Card>
				</div>
			</VisibilitySensor>
		);
	}
}

export default ProjectsSingle;
