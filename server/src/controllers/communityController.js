const { StatusCodes } = require("http-status-codes");
const { asyncHandler } = require("../utils/asyncHandler");
const { CommunityPost } = require("../models/CommunityPost");
const { User } = require("../models/User");

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

const getCommunityUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.userId).lean();

  if (!user) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "User not found",
    });
  }

  const recentPosts = await CommunityPost.find({ "author.userId": user._id })
    .sort({ createdAt: -1 })
    .limit(5)
    .lean();

  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      id: user._id,
      name: user.name,
      avatarUrl: user.avatarUrl || null,
      headline: user.headline || null,
      profile: user.profile || null,
      community: {
        interests: user.community?.interests || [],
        expertiseLevel: user.community?.expertiseLevel || "beginner",
        badges: user.community?.badges || [],
        stats: user.community?.stats || {
          postsCount: 0,
          likesReceived: 0,
          contributions: 0,
        },
      },
      recentPosts,
    },
  });
});

module.exports = { listCommunityPosts, getCommunityUserProfile };
