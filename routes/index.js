const express = require('express');

const notesrouter = require('./notes')
const app = express();

app.use('/notes', notesrouter);

module.exports = app;