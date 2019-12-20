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

export const fetchContact: Function = () => (dispatch: Function) => {
	axios.get(`${serverAddress}/api/contact`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_CONTACT, payload: response.data });
		}
	});
};

export const sendContactMessage: Function = (name: string, email: string, message: string) => (dispatch: Function) => {
	axios.post(`${serverAddress}/api/contact/message`, { name, email, message }).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.SEND_CONTACT_MESSAGE, payload: response.data });
		}
	});
};

export const resetContactMessage: Function = () => ({
	type: TYPES.SEND_CONTACT_MESSAGE,
	payload: { reset: true }
});
