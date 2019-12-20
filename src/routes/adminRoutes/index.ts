import * as fs from 'fs';
import { join } from 'path';

const dataFileDir: string = join(__dirname, '..', '..', 'data');
const homeDataFilePath: string = join(__dirname, '..', '..', 'data', 'home.json');
const aboutDataFilePath: string = join(__dirname, '..', '..', 'data', 'about.json');
const experienceDataFilePath: string = join(__dirname, '..', '..', 'data', 'experience.json');
const projectsDataFilePath: string = join(__dirname, '..', '..', 'data', 'projects.json');
const contactDataFilePath: string = join(__dirname, '..', '..', 'data', 'contact.json');

fs.access(dataFileDir, fs.constants.F_OK, err => {
	if (err) {
		fs.mkdir(dataFileDir, { recursive: true }, err => {
			if (err) {
				throw err;
			}
		});
	}
});

fs.access(homeDataFilePath, fs.constants.F_OK, err => {
	if (err) {
		fs.writeFile(homeDataFilePath, '[]', err => {
			if (err) {
				throw err;
			}
		});
	}
});

fs.access(aboutDataFilePath, fs.constants.F_OK, err => {
	if (err) {
		var initValue = {
			description: '',
			keywords: [],
			skills: [],
			resume: '',
			portrait: ''
		};
		fs.writeFile(aboutDataFilePath, JSON.stringify(initValue), err => {
			if (err) {
				throw err;
			}
		});
	}
});

fs.access(experienceDataFilePath, fs.constants.F_OK, err => {
	if (err) {
		fs.writeFile(experienceDataFilePath, '[]', err => {
			if (err) {
				throw err;
			}
		});
	}
});

fs.access(projectsDataFilePath, fs.constants.F_OK, err => {
	if (err) {
		fs.writeFile(projectsDataFilePath, '[]', err => {
			if (err) {
				throw err;
			}
		});
	}
});

fs.access(contactDataFilePath, fs.constants.F_OK, err => {
	if (err) {
		fs.writeFile(contactDataFilePath, '[]', err => {
			if (err) {
				throw err;
			}
		});
	}
});

export default (app: any) => {};
