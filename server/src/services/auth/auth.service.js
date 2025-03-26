const { redis } = require("../../config/db/connectRedis");
const Auth = require("../../model/auth.model");

async function createUser({ fullName, email, phoneNumber, password, address }) {
  const existUser = await Auth.findOne({ where: { email } });

  if (existUser) {
    throw new Error("User already exists");
  }

  // await redis.del("allUsers");

  const result = await Auth.create({
    fullName,
    email,
    phoneNumber,
    password,
    address,
  });
  return result;
}

async function verifyUser({ id }) {
  await Auth.update({ isVerified: true }, { where: { id } });
  await redis.del("allUsers");
  return await Auth.findByPk(id);
}

async function loginUserService(email) {
  const validEmail = await Auth.findOne({ where: { email: email } });
  if (!validEmail) {
    throw new Error("Invalid Credentials");
  }
  return validEmail;
}

async function getAllUserService() {
  const cachedUsers = await redis.get("allUsers");

  if (cachedUsers) {
    return JSON.parse(cachedUsers);
  }
  const result = await Auth.findAll({});

  await redis.set("allUsers", JSON.stringify(result), "EX", 600);

  return result;
}

module.exports = {
  createUser,
  verifyUser,
  loginUserService,
  getAllUserService,
};

//model
//validation
//service
//controller
//routes
