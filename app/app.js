const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.raw());
app.use((req, res) => {
	console.log('New request', req.url);
	console.log('Headers', req.headers);
	console.log('Cookies', req.cookies);
	console.log('Body', req.body);
	console.log('\n');
	res.send('OK');
	res.end();
});

app.listen(process.argv[2], () => {
	console.log(`Listening on port ${process.argv[2]}`);
});