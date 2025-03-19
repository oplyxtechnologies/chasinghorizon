const express = require("express");
const { signUpController } = require("../controller/auth.controller");
const validateUser = require("../validators/auth.validate");

const router = express.Router();

router.route("/").post(validateUser, signUpController);

module.exports = router;
