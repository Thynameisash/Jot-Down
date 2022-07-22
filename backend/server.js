const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");
const app = express();
const connectdb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectdb();
app.use(express.json());

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

app.use("/users", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(5000, console.log("Server running on port 5000"));
