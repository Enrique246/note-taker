const patth = require ('path');
const rout = require ('express').Router();

rout.get('/', (req, res) => {
    res.sendFile(patth.join(__dirname,'../../public/index.html'));

});

rout.get('/notes', (req, res) => {
    res.sendFile(patth.join(__dirname,'../../public/index.html'));

});

// Router conection
//https://stackoverflow.com/questions/56078508/why-is-module-exports-router-is-needed
module.exports = rout;