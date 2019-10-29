import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use('/static', express.static('static'));

const PORT = process.env.PORT || '8080';

app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
