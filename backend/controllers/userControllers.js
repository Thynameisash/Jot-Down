const asycnHandler = require("express-async-handler");
const User = require("../models/userModel");
const genToken = require("../util/genToken");

const registerUser = asycnHandler(async (req, res) => {
  const { name, email, pwd, pic } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404);
    throw new Error("User Exists");
  }
  const user = await User.create({
    name,
    email,
    pwd,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
  res.json({
    name,
    email,
  });
});

const loginUser = asycnHandler(async (req, res) => {
  const { email, pwd } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  console.log(res.req.body);
  if (await user.matchPasswd(pwd)) {
    console.log("han bhai bdiya ?");
    res.json({
      _id: user._id,  
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email / Password");
  }
});
module.exports = { registerUser, loginUser };
