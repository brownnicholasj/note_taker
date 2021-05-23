const noteData = require('../db/db');
const fsp = require('fs').promises;
const { json } = require('express');

function saver(newdata) {
	fsp.writeFile('./db/db.json', JSON.stringify(newdata), 'utf8');
}

module.exports = (router) => {
	router.get('/api/notes', (req, res) => res.json(noteData));

	router.post('/api/notes', (req, res) => {
		req.body.id = Date.now();
		noteData.push(req.body);

		saver(noteData);

		res.end();
	});

	router.delete('/api/notes/:id', (req, res) => {
		const { id } = req.params;
		const indexFind = (element) => element.id == id;
		const idIndex = noteData.findIndex(indexFind);

		noteData.splice(idIndex, 1);
		saver(noteData);

		res.end();
	});
};
