import * as fs from 'fs';
import { join } from 'path';
import { createTransport } from 'nodemailer';
import * as moment from 'moment-timezone';

const contactDataFilePath: string = join(__dirname, '..', 'data', 'contact.json');

const transporter = createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS
	}
});

export default (app: any) => {
	app.get('/api/contact', (req: any, res: any) => {
		fs.readFile(contactDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const contactData = JSON.parse(data);
				res.send(contactData);
			} else {
				throw err;
			}
		});
	});

	app.post('/api/contact/message', (req: any, res: any) => {
		fs.readFile(contactDataFilePath, 'utf8', (err, data) => {
			if (!err) {
				const contactData = JSON.parse(data);
				var timeStamp = moment(Date.now()).tz('America/Toronto').format('YYYY-MM-DD HH:mm:ss');
				const mailOptions = {
					from: `Message Notify <${process.env.EMAIL_USER}>`,
					to: contactData.email,
					subject: `[New Message | ${timeStamp}] From ${req.body.name}`,
					html: `
						<h4>Name: ${req.body.name}<h4>
						<h4>Email: ${req.body.email}</h4>
						<h4>Message:</h4>
						<p>${req.body.message}</p>`
				};
				transporter.sendMail(mailOptions, (err, info) => {
					if (err) {
						res.send({ error: true });
					} else {
						res.send({ error: false });
					}
				});
			} else {
				throw err;
			}
		});
	});
};
