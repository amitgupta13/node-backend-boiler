const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/users");
const validate = require("../middlewares/validate");
const { validateUser, validateSignin } = require("../models/User");

router.post("/signup", validate(validateUser), signup);
router.post("/signin", validate(validateSignin), signin);

module.exports = router;
