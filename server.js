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

app.get('/', (req, res) => {
	res.sendFile(path.join(BUILD_DIR, 'index.html'))
});

app.get('/api/coords', (req, res) => {
	getCoords(req.query.address)
		.then(response => res.send(response))
		.catch(err => console.error(err))
});

function getCoords(address) {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${keys.geocodeKey}`;
	return new Promise((resolve, reject) => {
		axios
		.get(url)
		.then(response => resolve({ coords: response.data.results[0].geometry.location }))
		.catch(error => {
			console.log(error);
			reject(error)
		});
	});
}

app.post('/api/email', (req, res) => {
	doEmail(req.body.name, req.body.email, req.body.message)
		.then(() => res.send({ success: true, }))
		.catch(err => console.error(err))
});

//TODO: get destination from db
function doEmail(name, email, message)
{
	var websiteEmailAddress = 'moonlightswingorchestra4@gmail.com';
	var emailService = 'Gmail';
	var desination = 'mark.kunz@comcast.net';
	var emailSubject = 'Moonlight Swing Website: Message from ' + name;
	var emailMessage = `
		Name: ${name}\n
		Email: ${email}\n
		Message:\n
		${message}\n\n\n
		Sent from Moonlight Swing Orchestra emailer (${websiteEmailAddress})
		DO NOT REPLY TO THIS EMAIL!
		REPLY TO ${email}
	`;

	return new Promise((resolve, reject) => {
		var mailer = mailService(emailService, websiteEmailAddress, keys.emailerPassword);
		mailer.send(desination, name, emailSubject, emailMessage)
		.then(() => resolve())
		.catch(err => {
			console.error(err);
			reject(err);
		});
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
