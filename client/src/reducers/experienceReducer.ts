import { FETCH_EXPERIENCE } from '../TYPES';

export default function(state: any = null, action: any) {
	switch (action.type) {
		case FETCH_EXPERIENCE: {
			return action.payload || [];
		}
		default: {
			return state;
		}
	}
}
