const { Sequelize } = require("sequelize");
const {
  DB_HOST,
  DB_DIALECT,
  DB_PORT,
  SSL,
  DB_PASSWORD,
  DB_USER,
  DB_NAME,
} = require("../env");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT || "postgres",
  port: DB_PORT,
  logging: false,
  timezone: "+05:45",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      ca: SSL,
    },
  },
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.info("✅ Connected to Postgres Database...");
    await sequelize.sync().then(() => {
      console.info("👾 Database Synced Successfully.");
    });
  } catch (error) {
    console.error("❌ Unable to connect to Postgres:", error);
  }
};

module.exports = { connectPostgres, sequelize };
