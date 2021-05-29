//Requires
const fs = require ('fs');
const patth = require ('path')

// To build a new note

const buildNewNote = (notes, nArray) => {
    nArray.push(notes)

    fs.writeFileSync(
    patth.join(__dirname,'../db/db.json'),
    JSON.stringify({notes: nArray},null, 2)        
        );
    
};

// To edit note
const edittNote = (edittedNote, nArray)=>{
    const index = nArray.findIndex(note => note.id === edittedNote.id);

    nArray.splice(index, 1);
    nArray.splice(index, 0, edittedNote);
//Array.prototype.splice()
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
    fs.writeFileSync(
        patth.join(__dirname,'../db/db.json'),
    JSON.stringify({notes: nArray},null, 2)
    )
};

const searchById = (id, nArray) => {
    const resultts = nArray.filter (note => note.id === id)[0];
    return resultts; 
}

const deleteNote = (notes, nArray) => {
    const ind = nArray. indexOf(notes);
    nArray.splice (index,1);
fs.writeFileSync(
    patth.join(__dirname,'../db/db.json'),
    JSON.stringify({notes: nArray},null, 2)
);
};

module.exports = {buildNewNote, searchById, deleteNote, edittNote};