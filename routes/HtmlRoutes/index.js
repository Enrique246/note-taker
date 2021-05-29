const patth = require ('path');
const rout = require ('express').Router();

rout.get('/', (req, res) => {
    res.sendFile(patth.join(__dirname,'../../public/index.html'));

});

rout.get('/notes', (req, res) => {
    res.sendFile(patth.join(__dirname,'../../public/index.html'));

});

module.exports = router;