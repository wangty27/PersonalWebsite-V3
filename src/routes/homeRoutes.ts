import { readFile } from 'fs';
import { join } from 'path';

const homeDataFilePath = join(__dirname, '..', 'data', 'home.json');

export default (app: any) => {
	app.get('/api/home', (req: any, res: any) => {
		readFile(homeDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const homeData = JSON.parse(data);
				res.send(homeData);
			} else {
				throw err;
			}
		});
	});
};
