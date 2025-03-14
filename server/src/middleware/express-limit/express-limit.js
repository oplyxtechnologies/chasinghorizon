const rateLimit = require("express-rate-limit");

function createRateLimiter(time, maxRequests, message, retryAfter) {
  return rateLimit({
    windowMs: time,
    max: maxRequests,
    message: { error: `${message} Retry after ${retryAfter} seconds` },
    statusCode: 429,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: (req) => req.ip,
    skipFailedRequests: true,
  });
}

var loginLimiter = createRateLimiter(
  0.5 * 60 * 1000,
  5,
  "Too many login attempts, please try again later.",
  15
);

var defaultLimiter = createRateLimiter(
  0.2 * 60 * 1000,
  10,
  "You are making too many requests.",
  20
);

module.exports = { loginLimiter, defaultLimiter };
