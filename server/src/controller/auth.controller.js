const { createUser } = require("../services/auth/auth.service");

exports.signUpController = async (req, res, next) => {
  try {
    const data = req.body;

    const user = await createUser(data);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
