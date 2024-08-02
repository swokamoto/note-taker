const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const {
    readFromFile,
    readAndAppend
} = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile(path.join(__dirname, '../db/db.json')).then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        note_id: uuidv4(),
    };

    if (!title || !text) {
        res.status(400).json('Please enter a title and text for your note.');
    } else {
        readAndAppend(newNote, path.join(__dirname, '../db/db.json'));
        
        res.json('Note added');
    }
});

module.exports = notes;