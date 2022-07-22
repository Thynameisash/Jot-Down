const express = require("express");
const notes = require("./data/notes");
const app = express();

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n.id == req.params.id);
  res.send(note);
});

app.listen(5000, console.log("Server running on 5000"));
