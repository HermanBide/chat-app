const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, picture, email } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All Fields");
  }

  const userExit = await User.findOne({ email, username });
  if (userExit) {
    res.status(400);
    throw new Error("Email already exist");
  }

  const user = await User.create({ username, email, password, picture });
  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
       // isAdmin: user.isAdmin,
      // picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      password: user.password,
      // isAdmin: user.isAdmin,
      // picture: user.picture,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const allUsers = asyncHandler(async (req, res) => {
  //search for users
  const keyword = req.query.search ? {
    $or: [
      {username: { $regex: req.query.search, $option: "i"}},
      {email: { $regex: req.query.search, $option: "i"}},
    ]
  }: {};
  const users = await User.find(keyword).find({ _id: {$ne: req.user._id}});
  res.send(users);
})

module.exports = { registerUser, loginUser, allUsers };
