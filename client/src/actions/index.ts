import axios from 'axios';

import * as TYPES from '../TYPES';

var serverAddress: string = 'http://localhost:1127';
if (process.env.NODE_ENV === 'production') {
	serverAddress = '';
}

export const fetchHome = () => (dispatch: any) => {
	axios.get(`${serverAddress}/api/home`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_HOME, payload: response.data });
		}
	});
};

export const fetchAbout = () => (dispatch: any) => {
	axios.get(`${serverAddress}/api/about`).then(response => {
		if (response.status === 200) {
			dispatch({ type: TYPES.FETCH_ABOUT, payload: response.data });
		}
	});
};
