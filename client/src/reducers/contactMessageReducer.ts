import { SEND_CONTACT_MESSAGE } from '../TYPES';

export default function(state: any = { reset: true }, action: any) {
	switch (action.type) {
		case SEND_CONTACT_MESSAGE: {
			return action.payload || [];
		}
		default: {
			return state;
		}
	}
}
