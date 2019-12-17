import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as helmet from 'helmet';

dotenv.config();
const app = express();

app.use(helmet());

app.use('/static', express.static('static'));

if (process.env.NODE_ENV !== 'production') {
	console.log('In development, using cors');
	const cors = require('cors');
	app.use(cors());
}

import adminRoutes from './routes/adminRoutes';
adminRoutes(app);

import homeRoutes from './routes/homeRoutes';
homeRoutes(app);

import aboutRoutes from './routes/aboutRoutes';
aboutRoutes(app);

import experienceRoutes from './routes/experienceRoutes';
experienceRoutes(app);

import projectsRoutes from './routes/projectsRoutes';
projectsRoutes(app);

const FRONT_END_PATH: string = path.resolve(__dirname, '..', 'client', 'build');

app.use(express.static(FRONT_END_PATH));
app.get('*', (req, res) => {
	res.sendFile(FRONT_END_PATH + 'index.html');
});

const PORT = process.env.PORT || '8080';

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
