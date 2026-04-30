const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const { env } = require("./config/env");
const { authRouter } = require("./routes/authRoutes");
const { userRouter } = require("./routes/userRoutes");
const { communityRouter } = require("./routes/communityRoutes");
const { aiRouter } = require("./routes/aiRoutes");
const { globalRateLimiter } = require("./middleware/rateLimiter");
const { errorHandler, notFoundHandler } = require("./middleware/errorHandler");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.clientOrigin,
    credentials: true,
  }),
);
app.use(morgan(env.nodeEnv === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(globalRateLimiter);

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "SpaceScope backend is healthy",
    env: env.nodeEnv,
  });
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/community", communityRouter);
app.use("/api/ai", aiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = { app };
