const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mailService = require('backend-tools').mailService;
const emailerPassword = require('./keys').emailerPassword;

const app = express();
const port = process.env.PORT || 5000;

const BUILD_DIR = path.join(__dirname, 'build')

app.use(express.static(BUILD_DIR));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.post('/api/email', function(req, res) {
	doEmail(req.body.name, req.body.email, req.body.message)
		.then(function() {
			res.send({ success: true, });
		})
		.catch(function(err) {
			console.error(err)
		})
});

function doEmail(name, email, message)
{
	return new Promise(function(resolve, reject) {
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

		var mailer = mailService(emailService, websiteEmailAddress, emailerPassword);
		mailer.send(desination, name, emailSubject, emailMessage)
		.catch(function(err) {
			console.error(err);
			reject(err);
		});
		resolve();
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
