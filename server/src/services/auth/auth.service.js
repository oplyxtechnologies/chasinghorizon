const { redis } = require("../../config/db/connectRedis");
const { ADMIN_MAIL } = require("../../config/env");
const Auth = require("../../model/auth.model");

async function createUser({ fullName, email, phoneNumber, password, address }) {
  const existUser = await Auth.findOne({ where: { email } });

  if (existUser) {
    throw new Error("User already exists");
  }

  await redis.del("allUsers");

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

async function initialAdminService({
  fullName,
  email,
  phoneNumber,
  role,
  password,
  isVerified,
  address,
}) {
  if (!email) {
    return;
  }
  const existUser = await Auth.findOne({ where: { email } });
  if (existUser) {
    return;
  }
  const admin = await Auth.create({
    fullName,
    email,
    phoneNumber,
    password,
    role,
    isVerified,
    address,
  });
  console.log(`Initial admin created with the mail from .env`);
  return admin;
}

async function createAdminService({
  fullName,
  email,
  phoneNumber,
  password,
  role,
  isVerified,
  address,
}) {
  const result = await Auth.create({
    fullName,
    email,
    phoneNumber,
    password,
    role,
    isVerified,
    address,
  });
  return result;
}

module.exports = {
  createUser,
  verifyUser,
  loginUserService,
  getAllUserService,
  initialAdminService,
  createAdminService,
};

//model
//validation
//service
//controller
//routes
