const express = require("express");
const {
  register,
  login,
  refreshToken,
  logout,
  logoutAll,
} = require("../controllers/authController");
const { validateRequest } = require("../middleware/validate");
const {
  registerValidator,
  loginValidator,
  refreshValidator,
} = require("../validators/authValidators");
const { authRateLimiter } = require("../middleware/rateLimiter");

const authRouter = express.Router();

authRouter.post("/register", authRateLimiter, registerValidator, validateRequest, register);
authRouter.post("/login", authRateLimiter, loginValidator, validateRequest, login);
authRouter.post("/refresh-token", authRateLimiter, refreshValidator, validateRequest, refreshToken);
authRouter.post("/logout", refreshValidator, validateRequest, logout);
authRouter.post("/logout-all", refreshValidator, validateRequest, logoutAll);

module.exports = { authRouter };
