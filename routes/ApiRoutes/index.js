const rout = require('express').Router();
const noteRoute = require ('./noteRoute');

rout.use(noteRoute);

module.exports = rout;