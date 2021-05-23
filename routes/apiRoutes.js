const noteData = require('../db/db');

module.exports = (app) => {
	app.get('/api/notes', (req, res) => res.json(noteData));

	app.post('/api/notes', (req, res) => {
		noteData.push(req.body);
		res.end();
	});

	app.delete('/api/notes', (req, res) => {
		console.log(req);
		res.end();
	});
};
