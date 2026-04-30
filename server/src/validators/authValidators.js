const { body } = require("express-validator");

const registerValidator = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 80 })
    .withMessage("Name must be between 2 and 80 characters"),
  body("password")
    .isLength({ min: 8, max: 72 })
    .withMessage("Password must be between 8 and 72 characters")
    .matches(/[A-Z]/)
    .withMessage("Password must include at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must include at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must include at least one number"),
  body("email")
    .optional({ values: "falsy" })
    .isEmail()
    .withMessage("Email must be valid")
    .normalizeEmail(),
];

const loginValidator = [
  body("identifier")
    .trim()
    .notEmpty()
    .withMessage("Identifier (name or email) is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

const refreshValidator = [
  body("refreshToken")
    .optional({ values: "falsy" })
    .isString()
    .withMessage("Refresh token must be a string"),
];

module.exports = { registerValidator, loginValidator, refreshValidator };
