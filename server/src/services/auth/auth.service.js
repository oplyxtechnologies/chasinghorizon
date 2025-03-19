const User = require("../../model/auth.model");

async function createUser({ fullName, email, phoneNumber, password }) {
  const existUser = await User.findOne({ email });
  if (existUser) {
    throw new Error("User already exists");
  }
  const result = new User({ fullName, email, phoneNumber, password });
  return await User.create(result);
}

async function verifyUser({ id }) {
  return await User.findByIdAndUpdate(id, { isVerified: true }, { new: true });
}

module.exports = { createUser, verifyUser };
