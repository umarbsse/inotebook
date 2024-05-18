const express = require('express');
var fetchuser = require('../middleware/fetchuser')
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
const router = express.Router();


//Route 1: Get all the notes using : GET "/api/notes/fetchallnotes". required login
router.get("/fetchallnotes", fetchuser, async (req, res) => {

    try {

        const note = await Note.find({ user: req.user.id });

        res.json(note)

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Some Error occured");
    }

})

//Route 2: Add a new note using : post "/api/notes/addnote". required login
router.post("/addnote", fetchuser,
    [
        body("title", "Enter a valid title").isLength({ min: 3 }).escape(),
        body("descripition", "Enter a valid descripition").isLength({ min: 5 }).escape()
    ], async (req, res) => {
        try {
            const { title, descripition, tag } = req.body;
            const errors = validationResult(req);
            //IF VALIDATION FAILED
            if (!errors.isEmpty()) {
                res.send({ errors: errors.array() });
            }
            const note = new Note({
                title, descripition, tag, user: req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote)

        } catch (error) {

            console.error(error.message);
            res.status(500).send("Some Error occured");
        }
})

//Route 3: Add a new note using : post "/api/notes/updatenote". required login
router.put("/updatenote/:id", fetchuser, async (req, res) => {



    try {
        const { title, descripition, tag } = req.body;
        const newNote = {};
        if (title) {
            newNote.title = title
        }
        if (descripition) {
            newNote.descripition = descripition
        }
        if (tag) {
            newNote.tag = tag
        }

        //FIND THE NOTE TO B UPDATED
        let note = await Note.findById(req.params.id);
        if (!note) {
            res.status(400).send("Not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note })

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Some Error occured");
    }
})

//Route 4: Add a new note using : post "/api/notes/deletenote". required login
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    try {
        //FIND THE NOTE TO Be deleted
        let note = await Note.findById(req.params.id);
        if (!note) {
            res.status(400).send("Not found")
        }
        // Allow the deletion if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ success: "Note has been deleted", note: note })

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Some Error occured");
    }



})

module.exports = router