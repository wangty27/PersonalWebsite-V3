import * as fs from 'fs';
import { join } from 'path';

const dataFileDir: string = join(__dirname, '..', '..', 'data');
const homeDataFilePath: string = join(__dirname, '..', '..', 'data', 'home.json');
const aboutDataFilePath: string = join(__dirname, '..', '..', 'data', 'about.json');
const experienceDataFilePath: string = join(__dirname, '..', '..', 'data', 'experience.json');

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
		fs.writeFile(aboutDataFilePath, initValue, err => {
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

export default (app: any) => {};
