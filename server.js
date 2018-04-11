const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const mailService = require('./mailer');

app.get('/api/hello', (req, res) => {
	res.send({ express: 'Hello From Express' });
});

app.post('/api/email', (req, res) => {
	
	await doEmail()

	res.send({ success: true, info: info });
});

async function doEmail()
{
	try {
		var mailer = mailService('Gmail', 'moonlightswingorchestra4@gmail.com', '');
		var info = await mailer.send('', 'Tony', 'subbyyject', 'bodddyyyy')
		cinfo(info)
	}
	catch(err) {
		cerr(err)
	}
}

app.listen(port, () => console.log(`Listening on port ${port}`));
