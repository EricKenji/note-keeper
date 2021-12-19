const router = require('express').Router();
const fs = require('fs');

router.get ('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db/db.json'));
    res.json(notes);
});


//post a new note
router.post('/api/notes', (res, req) => {
    let notes = JSON.parse(fs.readFileSync('db/db/json'));
    const newNote = {
        id: notes[notes.length - 1].id + 1,
        title: req.body.title,
        text: req.body.text
    };

    console.log(newNote);
    notes.push(newNote);
    fs. writeFileSync('./db/db.json',
    JSONs.stringify(notes));

    res.json(notes);

});

// router.delete('/api/notes/:id', (req, res) => {

// })

module.exports = router;