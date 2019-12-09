import * as fs from 'fs';
import { join } from 'path';

const homeDataFilePath: string = join(__dirname, '..', 'data', 'home.json');

export default (app: any) => {
	app.get('/api/home', (req: any, res: any) => {
		fs.readFile(homeDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const homeData = JSON.parse(data);
				res.send(homeData);
			} else {
				throw err;
			}
		});
	});
};
