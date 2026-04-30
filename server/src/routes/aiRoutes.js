const express = require("express");
const { askAi } = require("../controllers/aiController");
const { askAiValidator } = require("../validators/aiValidators");
const { validateRequest } = require("../middleware/validate");
const { aiRateLimiter } = require("../middleware/rateLimiter");

const aiRouter = express.Router();

aiRouter.post("/ask", aiRateLimiter, askAiValidator, validateRequest, askAi);

module.exports = { aiRouter };
