import * as fs from 'fs';
import { join } from 'path';

const experienceDataFilePath: string = join(__dirname, '..', 'data', 'experience.json');

export default (app: any) => {
	app.get('/api/experience', (req: any, res: any) => {
		fs.readFile(experienceDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const experienceData = JSON.parse(data);
				res.send(experienceData);
			} else {
				throw err;
			}
		});
	});
};
