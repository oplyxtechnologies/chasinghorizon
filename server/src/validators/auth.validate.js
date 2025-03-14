var Joi = require("joi");

var userSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string().required(),
});

function validateUser(req, res, next) {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
}

module.exports = validateUser;
