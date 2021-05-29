const rout = require('express').Router();
const { Router } = require('express');
//UUID v4 https://www.sohamkamani.com/uuid-versions-explained/
//V4 : Randomness
//The generation of a v4 UUID is much simpler to comprehend. The bits that comprise a UUID v4 are generated randomly and with no inherent logic. Because of this, there is no way to identify information about the source by looking at the UUID.
const {v4: uuidv4} = require('uuid');
const {notes} = require('../../db/db.json')
const {buildNewNote, searchById, edittNote, deleteNote}= require('../../lib/notes')

rout.get('/notes', (req, res)=>{
    res.json(notes);


//Builds new note
if (!req.body.id){
    req.body.id = uuidv4();
    buildNewNote(req.body,notes);
}
else {
    edittNote(req.body, notes);
}

res.json(req.body);

});

rout.delete('/notes/:id',(req, res)=> {
    const note = searchById(req.params.id, notes);

    deleteNote(note, notes);
    res.json();    
    });

    module.exports = router;