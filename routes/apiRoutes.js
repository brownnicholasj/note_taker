const noteData = require('../db/db');
const { appendFile } = require('fs');
const { json } = require('express');

module.exports = (router) => {
	router.get('/api/notes', (req, res) => res.json(noteData));

	router.post('/api/notes', (req, res) => {
		req.body.id = Date.now();
		noteData.push(req.body);
		// appendFile('../db/db', noteData, json);
		res.end();
	});

	router.delete('/api/notes/:id', (req, res) => {
		const { id } = req.params;

		const indexFind = (element) => element.id == id;

		const idIndex = noteData.findIndex(indexFind);

		noteData.splice(idIndex, 1);

		res.end();
	});
};
