const express = require("express");
const { authenticate } = require("../middleware/auth");
const { validateRequest } = require("../middleware/validate");
const {
  getMe,
  updateCommunityProfile,
  addCommunityConnection,
  createCommunityPost,
  toggleCommunityPostLike,
  addCommunityPostComment,
} = require("../controllers/userController");
const { updateCommunityProfileValidator } = require("../validators/userValidators");
const { body, param } = require("express-validator");

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
    body("imageUrls")
      .optional()
      .isArray({ max: 4 })
      .withMessage("imageUrls must be an array with at most 4 images"),
    body("imageUrls.*")
      .optional()
      .isURL()
      .withMessage("Each image URL must be valid"),
  ],
  validateRequest,
  createCommunityPost,
);
userRouter.post(
  "/community-posts/:postId/like",
  [param("postId").isMongoId().withMessage("postId must be a valid post id")],
  validateRequest,
  toggleCommunityPostLike,
);
userRouter.post(
  "/community-posts/:postId/comments",
  [
    param("postId").isMongoId().withMessage("postId must be a valid post id"),
    body("content")
      .trim()
      .isLength({ min: 1, max: 1000 })
      .withMessage("comment must be between 1 and 1000 characters"),
  ],
  validateRequest,
  addCommunityPostComment,
);

module.exports = { userRouter };
