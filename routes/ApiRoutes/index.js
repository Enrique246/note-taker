const rout = require('express').Router();
const noteRoute = require ('./notesRoutes');

rout.use(noteRoute);

module.exports = rout;