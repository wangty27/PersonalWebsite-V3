import axios from 'axios';

import * as TYPES from '../TYPES';

var serverAddress: string = 'http://localhost:1127';
if (process.env.NODE_ENV === 'production') {
	serverAddress = '';
}

export const fetchHome: Function = () => (dispatch: Function) => {
	axios.get(`${serverAddress}/api/home`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_HOME, payload: response.data });
		}
	});
};

export const fetchAbout: Function = () => (dispatch: Function) => {
	axios.get(`${serverAddress}/api/about`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_ABOUT, payload: response.data });
		}
	});
};

export const fetchExperience: Function = () => (dispatch: Function) => {
	axios.get(`${serverAddress}/api/experience`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_EXPERIENCE, payload: response.data });
		}
	});
};

export const fetchProjects: Function = () => (dispatch: Function) => {
	axios.get(`${serverAddress}/api/projects`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_PROJECTS, payload: response.data });
		}
	});
};
