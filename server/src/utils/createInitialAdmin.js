const { ADMIN_MAIL } = require("../config/env");
const { hashPassword } = require("../lib/bcrypt/bcrypt");
const {
  createUser,
  initialAdminService,
} = require("../services/auth/auth.service");

exports.createAdmin = async () => {
  let data = {
    fullName: "ADMIN",
    email: ADMIN_MAIL,
    phoneNumber: 976167657,
    password: "chasinghorizon",
    role: "admin",
    isVerified: true,
    address: [
      {
        country: "Nepal",
        city: "Kathmandu",
        street: "Kapan",
        zip: "3303",
      },
    ],
  };
  const hashedPassword = await hashPassword(data.password);
  data = {
    ...data,
    password: hashedPassword,
  };
  try {
    const result = initialAdminService(data);
  } catch (error) {
    console.log("");
  }
};
