const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) return res.status(400).send("User Already Registered");

  user = new User({
    name,
    email,
    password
  });

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = user.generateAuthToken();

  res.header("Access-Control-Allow-Origin", "*");

  res.json({ profile: _.pick(user, ["_id", "name", "email"]), token });
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid Email Or Password");

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Email Or Password");

  const token = user.generateAuthToken();

  res.send(token);
};

const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.user._id });
  if (!user) return res.status(404).send("User Does not Exists");
  return res.status(200).json(_.pick(user, ["_id", "name", "email"]));
};

module.exports = {
  signup,
  signin,
  profile
};
