import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();
const app = express();

app.use('/static', express.static('static'));

if (process.env.NODE_ENV !== 'production') {
	console.log('In development, using cors');
	const cors = require('cors');
	app.use(cors());
}

import homeRoutes from './routes/homeRoutes';
homeRoutes(app);

var FRONT_END_PATH: string = path.resolve(__dirname, 'client', 'build');
if (process.env.NODE_ENV !== 'production') {
	FRONT_END_PATH = path.resolve(__dirname, '..', 'client', 'build');
}

app.use(express.static(FRONT_END_PATH));
app.get('*', (req, res) => {
	res.sendFile(FRONT_END_PATH + 'index.html');
});

const PORT = process.env.PORT || '8080';

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
