import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import experienceReducer from './experienceReducer';
import projectsReducer from './projectsReducer';

export default combineReducers({
	home: homeReducer,
	about: aboutReducer,
	experience: experienceReducer,
	projects: projectsReducer
});
