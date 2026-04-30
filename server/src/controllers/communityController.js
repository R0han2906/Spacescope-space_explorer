const { StatusCodes } = require("http-status-codes");
const { asyncHandler } = require("../utils/asyncHandler");
const { CommunityPost } = require("../models/CommunityPost");

const listCommunityPosts = asyncHandler(async (req, res) => {
  const limit = Math.min(Number(req.query.limit || 50), 100);
  const posts = await CommunityPost.find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();

  res.status(StatusCodes.OK).json({
    success: true,
    data: posts,
  });
});

module.exports = { listCommunityPosts };
