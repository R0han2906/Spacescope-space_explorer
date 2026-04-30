const { body } = require("express-validator");

const updateCommunityProfileValidator = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 2, max: 80 })
    .withMessage("Name must be between 2 and 80 characters"),
  body("avatarUrl")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Avatar URL must be a valid URL"),
  body("headline")
    .optional({ values: "null" })
    .trim()
    .isLength({ max: 120 })
    .withMessage("Headline must be at most 120 characters"),
  body("profile.bio")
    .optional({ values: "null" })
    .trim()
    .isLength({ max: 500 })
    .withMessage("Bio must be at most 500 characters"),
  body("profile.location")
    .optional({ values: "null" })
    .trim()
    .isLength({ max: 120 })
    .withMessage("Location must be at most 120 characters"),
  body("profile.website")
    .optional({ values: "falsy" })
    .isURL()
    .withMessage("Website must be a valid URL"),
  body("community.interests")
    .optional()
    .isArray({ max: 20 })
    .withMessage("Interests must be an array with up to 20 entries"),
  body("community.expertiseLevel")
    .optional()
    .isIn(["beginner", "intermediate", "advanced"])
    .withMessage("Expertise level is invalid"),
  body("community.badges")
    .optional()
    .isArray({ max: 50 })
    .withMessage("Badges must be an array with up to 50 entries"),
];

module.exports = { updateCommunityProfileValidator };
