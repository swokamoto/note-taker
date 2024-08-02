const router = require('express').Router();

// route to notes
const notesRouter = require('./notes');
router.use('/notes', notesRouter);

module.exports = router;