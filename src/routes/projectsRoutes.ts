import * as fs from 'fs';
import { join } from 'path';

const projectsDataFilePath: string = join(__dirname, '..', 'data', 'projects.json');

export default (app: any) => {
	app.get('/api/projects', (req: any, res: any) => {
		fs.readFile(projectsDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const projectsData = JSON.parse(data);
				res.send(projectsData);
			} else {
				throw err;
			}
		});
	});
};
