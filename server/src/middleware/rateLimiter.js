const rateLimit = require("express-rate-limit");
const { env } = require("../config/env");

const authRateLimiter = rateLimit({
  windowMs: env.rateLimitWindowMs,
  max: Math.max(10, Math.floor(env.rateLimitMax / 5)),
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts. Please try again later.",
  },
});

const globalRateLimiter = rateLimit({
  windowMs: env.rateLimitWindowMs,
  max: env.rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

const aiRateLimiter = rateLimit({
  windowMs: env.rateLimitWindowMs,
  max: Math.max(20, Math.floor(env.rateLimitMax / 2)),
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many AI requests. Please try again in a while.",
  },
});

module.exports = { authRateLimiter, globalRateLimiter, aiRateLimiter };
