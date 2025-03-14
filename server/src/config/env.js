const dotenv = require("dotenv");
dotenv.config();

const { SMTP_PASSWORD, SMTP_EMAIL, MONGO_URI } = process.env;

module.exports = { SMTP_PASSWORD, SMTP_EMAIL, MONGO_URI };
