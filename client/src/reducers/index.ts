import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import experienceReducer from './experienceReducer';
import projectsReducer from './projectsReducer';
import contactReducer from './contactReducer';
import contactMessageReducer from './contactMessageReducer';

export default combineReducers({
	home: homeReducer,
	about: aboutReducer,
	experience: experienceReducer,
	projects: projectsReducer,
	contact: contactReducer,
	contactMsg: contactMessageReducer
});
