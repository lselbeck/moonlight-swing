const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mailService = require('backend-tools').mailService;
const emailerPassword = require('./src/keys').emailerPassword;

const app = express();
const port = process.env.PORT || 5000;

const BUILD_DIR = path.join(__dirname, 'build')

app.use(express.static(BUILD_DIR));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

app.post('/api/email', async (req, res) => {
	try {
		await doEmail(req.body.name, req.body.email, req.body.message)
		res.send({ success: true, });
	} catch (err) {
		console.error(err)
	}
});

async function doEmail(name, email, message)
{
	var websiteEmailAddress = 'moonlightswingorchestra4@gmail.com';
	var emailService = 'Gmail';
	var desination = 'lselbeck@gmail.com';

	var emailMessage = `
		Name: ${name}

		Email: ${email}

		Message:

		${message}



		Sent from Moonlight Swing Orchestra emailer (${websiteEmailAddress})
		DO NOT REPLY TO THIS EMAIL!
		REPLY TO ${email}
	`;

	var emailSubject = 'Moonlight Swing Website: Message from ' + name;

	try {
		var mailer = mailService(emailService, websiteEmailAddress, emailerPassword);
		await mailer.send(desination, name, emailSubject, emailMessage)
	}
	catch(err) {
		console.error(err)
	}
}

app.listen(port, () => console.log(`Listening on port ${port}`));
