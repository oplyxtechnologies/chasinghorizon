const Redis = require("ioredis");
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD } = require("../env");

const redis = new Redis({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
});

async function connectRedis() {
  try {
    await redis.ping();
    console.info("🥼 : Redis Connection established...");
  } catch (error) {
    console.error("❌ Error connecting to Redis:", error);
  }
}

module.exports = { redis, connectRedis };
