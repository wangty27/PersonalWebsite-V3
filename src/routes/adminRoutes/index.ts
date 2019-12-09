import * as fs from 'fs';
import { join } from 'path';

const homeDataFileDir: string = join(__dirname, '..', 'data');
const homeDataFilePath: string = join(__dirname, '..', 'data', 'home.json');

fs.access(homeDataFileDir, fs.constants.F_OK, err => {
	if (err) {
		fs.mkdir(homeDataFileDir, { recursive: true }, err => {
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

export default (app: any) => {};
