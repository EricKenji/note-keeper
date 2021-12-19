// required modules
const router = require('express').Router();
const fs = require('fs');

router.get ('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db/db.json'));
    return res.json(notes);
});


//post a new note
router.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    const newNote = {
        id: notes[notes.length - 1].id + 1,
        title: req.body.title,
        text: req.body.text
    };

    console.log(newNote);
    notes.push(newNote);
    fs.writeFileSync('./db/db.json',
    JSON.stringify(notes));

    return res.json(notes);

});

// delete note
router.delete('/api/notes/:id', (req, res) => {
    // finds which id to delete
    const noteId = parseInt(req.params.id);
    const notes = JSON.parse(fs.readFileSync('./db/db.json'));
    // uses filter to remove the note from the array
    const newNotes = notes.filter(data => data.id != noteId);
    //rewrites the db.json file
    fs.writeFileSync('./db/db.json', JSON.stringify(newNotes));
    res.json(newNotes);
});

module.exports = router;