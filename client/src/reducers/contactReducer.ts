import { FETCH_CONTACT } from '../TYPES';

export default function(state: any = null, action: any) {
	switch (action.type) {
		case FETCH_CONTACT: {
			return action.payload || [];
		}
		default: {
			return state;
		}
	}
}
