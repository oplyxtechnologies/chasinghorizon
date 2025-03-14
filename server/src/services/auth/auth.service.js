var User = require("../../model/auth.model");

async function createUser({ fullName, email, phoneNumber, password }) {
  return await User.create({ fullName, email, phoneNumber, password });
}

async function verifyUser({ id }) {
  return await User.findByIdAndUpdate(id, { isVerified: true }, { new: true });
}
