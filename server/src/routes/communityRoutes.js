const express = require("express");
const {
  listCommunityPosts,
  getCommunityUserProfile,
} = require("../controllers/communityController");
const { param } = require("express-validator");
const { validateRequest } = require("../middleware/validate");

const communityRouter = express.Router();

communityRouter.get("/posts", listCommunityPosts);
communityRouter.get(
  "/users/:userId",
  [param("userId").isMongoId().withMessage("userId must be a valid user id")],
  validateRequest,
  getCommunityUserProfile,
);

module.exports = { communityRouter };
