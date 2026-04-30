const { body } = require("express-validator");

const askAiValidator = [
  body("prompt")
    .trim()
    .isLength({ min: 2, max: 2000 })
    .withMessage("Prompt must be between 2 and 2000 characters"),
];

module.exports = { askAiValidator };
