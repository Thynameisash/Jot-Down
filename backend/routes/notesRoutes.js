const express = require("express");
const {
  getNotes,
  createNote,
  getNotebyId,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(protect, getNotebyId);
// router.route("/:id").get(protect, getNotebyId);
router.route("/:id").put(protect, updateNote);
router.route("/:id").delete(protect, deleteNote);

module.exports = router;
