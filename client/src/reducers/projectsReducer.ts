import { FETCH_PROJECTS } from '../TYPES';

export default function(state: any = null, action: any) {
	switch (action.type) {
		case FETCH_PROJECTS: {
			return action.payload || [];
		}
		default: {
			return state;
		}
	}
}
