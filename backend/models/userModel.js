const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  },
  {
    timestamps: true,
  }
);

userModel.pre("save", async function (next) {
  if (!this.isModified("pwd")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.pwd = bcrypt.hash(this.pwd, salt);
});

userModel.methods.matchPasswd = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.pwd);
};

const User = mongoose.model("User", userModel);
module.exports = User;
