const { ADMIN_MAIL } = require("../config/env");
const { createUser } = require("../services/auth/auth.service");

exports.createAdmin = () => {
  const data = {
    fullName: "Oplyx Tech",
    email: ADMIN_MAIL,
    phoneNumber: 976167657,
    password: "chasinghorizon",
    role: "admin",
    address: [
      {
        country: "Nepal",
        city: "Kathmandu",
        street: "Kapan",
        zip: "3303",
      },
    ],
  };
  try {
    const result = createUser(data);
    console.info(`Initial admin created...`);
  } catch (error) {
    console.log("");
  }
};
