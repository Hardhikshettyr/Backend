const express = require("express");
const app = express();

app.use(express.json());

let notes = [];

app.post("/notes", (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            message: "Note name is required"
        });
    }

    notes.push(req.body);

    res.status(201).json({
        message: "Note created successfully"
    });
});

app.get("/notes", (req, res) => {
    res.status(200).json({
        notes: notes,
        message: "Displayed successfully"
    });
});

app.get("/notes/:index", (req, res) => {
    const index = req.params.index;

    if (!notes[index]) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.status(200).json({
        note: notes[index],
        message: "Displayed successfully"
    });



    
});



app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;

    if (!notes[index]) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    notes.splice(index, 1);

    res.status(200).json({
        message: "Note successfully deleted"
    });
});

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;

    if (!notes[index]) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    if (!req.body.name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    notes[index].name = req.body.name;

    res.status(200).json({
        message: "Note successfully updated"
    });
});

module.exports = app;