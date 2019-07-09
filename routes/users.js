const express = require("express");
const router = express.Router();
const { signup, signin, profile } = require("../controllers/users");
const validate = require("../middlewares/validate");
const { validateUser, validateSignin } = require("../models/User");
const auth = require("../middlewares/auth");

router.post("/signup", validate(validateUser), signup);
router.post("/signin", validate(validateSignin), signin);
router.get("/profile", auth, profile);

module.exports = router;
