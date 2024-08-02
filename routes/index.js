const express = require('express');
const router = express.Router();

// link to notes
const notes = require('./notes');
router.use('/notes', notes);

module.exports = router;