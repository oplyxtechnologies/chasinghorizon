const express = require("express");
const { createFlightController } = require("../controller/flight.controller");
const validateFlight = require("../validators/flight.validate");

const router = express.Router();

router.route("/").post(validateFlight, createFlightController);

module.exports = router;
