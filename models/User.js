const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, "jwtPrivateKey");
  return token;
};

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email()
  };
  return Joi.validate(user, schema, { abortEarly: false });
}

function validateSignin(user) {
  const schema = {
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email()
  };
  return Joi.validate(user, schema, { abortEarly: false });
}

exports.User = User;
exports.validateUser = validateUser;
exports.validateSignin = validateSignin;
