const Joi = require("joi");

const flightSchema = Joi.object({
  flightName: Joi.string().required(),
  flightNumber: Joi.string().required(),
  passenger_info: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      age: Joi.number().required(),
      gender: Joi.string().required(),
      seat: Joi.string().required(),
    })
  ),
  airline: Joi.string().required(),
  from: Joi.string().required(),
  to: Joi.string().required(),
  departure: Joi.date().required(),

  arrival: Joi.date().required(),
  duration: Joi.number().required(),
  bookedseat: Joi.number().required(),
  price: Joi.number().required(),
  payment: Joi.array().items(
    Joi.object({
      method: Joi.string().required(),
      status: Joi.string().required(),
      amount: Joi.number().required(),
      currency: Joi.string().required(),
      date: Joi.date().required(),
    })
  ),
});

function validateFlight(req, res, next) {
  const { error } = flightSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}

module.exports = validateFlight;
