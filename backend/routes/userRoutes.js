const express = require("express");
const {
  loginUser,
  registerUser,
  updateUserProfile,
} = require("../controllers/userControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;
