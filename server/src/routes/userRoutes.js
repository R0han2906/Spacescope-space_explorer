const express = require("express");
const { authenticate } = require("../middleware/auth");
const { validateRequest } = require("../middleware/validate");
const {
  getMe,
  updateCommunityProfile,
  addCommunityConnection,
  createCommunityPost,
} = require("../controllers/userController");
const { updateCommunityProfileValidator } = require("../validators/userValidators");
const { body } = require("express-validator");

const userRouter = express.Router();

userRouter.use(authenticate);

userRouter.get("/me", getMe);
userRouter.patch(
  "/community-profile",
  updateCommunityProfileValidator,
  validateRequest,
  updateCommunityProfile,
);
userRouter.post(
  "/connections",
  [
    body("userId").isMongoId().withMessage("userId must be a valid user id"),
    body("relation")
      .optional()
      .isIn(["following", "member", "moderator"])
      .withMessage("relation is invalid"),
  ],
  validateRequest,
  addCommunityConnection,
);
userRouter.post(
  "/community-posts",
  [
    body("content")
      .trim()
      .isLength({ min: 1, max: 3000 })
      .withMessage("content must be between 1 and 3000 characters"),
    body("tags").optional().isArray({ max: 20 }).withMessage("tags must be an array"),
  ],
  validateRequest,
  createCommunityPost,
);

module.exports = { userRouter };
