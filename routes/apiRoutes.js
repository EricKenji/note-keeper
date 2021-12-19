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
        id: notes[notes.length].id,
        title: req.body.title,
        text: req.body.text
    };

    console.log(newNote);
    notes.push(newNote);
    fs.writeFileSync('./db/db.json',
    JSON.stringify(notes));

    return res.json(notes);

});

// router.delete('/api/notes/:id', (req, res) => {

// })

module.exports = router;