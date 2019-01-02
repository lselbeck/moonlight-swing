const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const MailPromise = require('mail-promise').MailPromise;
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

app.get('/api/coords', (req, res, next) => {
	getCoords(req.query.address)
		.then(response => res.send(response))
		.catch(next)
});

function getCoords(address) {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${keys.geocodeKey}`;
	return axios.get(url).then(response => ({ coords: response.data.results[0].geometry.location }));
}

app.post('/api/email', (req, res, next) => {
	doEmail(req.body.name, req.body.email, req.body.message)
		.then(() => res.send({ success: true, }))
		.catch(next)
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

	var mailer = new MailPromise(emailService, websiteEmailAddress, keys.emailerPassword);
	return mailer.send(desination, name, emailSubject, emailMessage)
}

app.listen(port, () => console.log(`Listening on port ${port}`));
