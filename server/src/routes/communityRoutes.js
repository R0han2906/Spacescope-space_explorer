const express = require("express");
const { listCommunityPosts } = require("../controllers/communityController");

const communityRouter = express.Router();

communityRouter.get("/posts", listCommunityPosts);

module.exports = { communityRouter };
