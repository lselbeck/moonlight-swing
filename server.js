const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const mailService = require('backend-tools').mailService;
const keys = require('./keys');

const app = express();
const port = process.env.PORT || 5000;

const BUILD_DIR = path.join(__dirname, 'build')

app.use(express.static(BUILD_DIR));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.get('/api/coords', function(req, res) {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${keys.geocodeKey}`;

	axios
		.get(url)
		.then(function(response) {
			res.send({
				coords: response.data.results[0].geometry.location
			});
		})
		.catch(error => {
			console.log(error);
		})
});

app.post('/api/email', function(req, res) {
	doEmail(req.body.name, req.body.email, req.body.message)
		.then(function() {
			res.send({ success: true, });
		})
		.catch(function(err) {
			console.error(err);
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

		var mailer = mailService(emailService, websiteEmailAddress, keys.emailerPassword);
		mailer.send(desination, name, emailSubject, emailMessage)
		.catch(function(err) {
			console.error(err);
			reject(err);
		});
		resolve();
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
