const path = require("path");
const dotenv = require("dotenv");

const envFile =
  process.env.NODE_ENV === "test"
    ? ".env.test"
    : process.env.NODE_ENV === "production"
      ? ".env"
      : ".env";

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT || 5000),
  mongoUri:
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/spacescope_auth_db",
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  jwtAccessSecret: process.env.JWT_ACCESS_SECRET || "dev-access-secret",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || "dev-refresh-secret",
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  groqApiKey: process.env.GROQ_API_KEY || "",
  groqModel: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
  saltRounds: Number(process.env.BCRYPT_SALT_ROUNDS || 12),
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX || 100),
};

module.exports = { env };
