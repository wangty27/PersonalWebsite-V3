import * as fs from 'fs';
import { join } from 'path';

const aboutDataFilePath: string = join(__dirname, '..', 'data', 'about.json');

export default (app: any) => {
	app.get('/api/about', (req: any, res: any) => {
		fs.readFile(aboutDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const aboutData = JSON.parse(data);
				res.send(aboutData);
			} else {
				throw err;
			}
		});
	});
};
