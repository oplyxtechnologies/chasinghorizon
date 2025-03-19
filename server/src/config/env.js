const dotenv = require("dotenv");
dotenv.config();

const {
  SMTP_PASSWORD,
  SMTP_EMAIL,
  MONGO_URI,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_DIALECT,
  SSL,
  DB_PORT,
  REDIS_PORT,
  REDIS_HOST,
  REDIS_PASSWORD,
  CORS_ORIGIN,
} = process.env;

module.exports = {
  SMTP_PASSWORD,
  SMTP_EMAIL,
  MONGO_URI,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_DIALECT,
  SSL,
  DB_PORT,
  REDIS_PORT,
  REDIS_HOST,
  REDIS_PASSWORD,
  CORS_ORIGIN,
};
