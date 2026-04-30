const { StatusCodes } = require("http-status-codes");
const { User } = require("../models/User");
const { CommunityPost } = require("../models/CommunityPost");
const { asyncHandler } = require("../utils/asyncHandler");
const {
  buildCommunitySnapshot,
  syncCommunityDataAcrossUsers,
} = require("../services/communitySyncService");

const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.authUser._id);
  res.status(StatusCodes.OK).json({
    success: true,
    data: {
      id: user._id,
      name: user.name,
      email: user.email || null,
      avatarUrl: user.avatarUrl || null,
      headline: user.headline || null,
      profile: user.profile,
      community: user.community,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
});

const updateCommunityProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.authUser._id);
  const { name, avatarUrl, headline, profile, community } = req.body;

  if (name !== undefined) user.name = name;
  if (avatarUrl !== undefined) user.avatarUrl = avatarUrl;
  if (headline !== undefined) user.headline = headline;

  if (profile) {
    user.profile = {
      ...user.profile.toObject(),
      ...profile,
    };
  }

  if (community) {
    user.community = {
      ...user.community.toObject(),
      ...community,
      socialLinks: {
        ...user.community.socialLinks,
        ...(community.socialLinks || {}),
      },
      preferences: {
        ...user.community.preferences,
        ...(community.preferences || {}),
      },
      stats: {
        ...user.community.stats,
        ...(community.stats || {}),
      },
      connections: user.community.connections,
    };
  }

  await user.save();
  await syncCommunityDataAcrossUsers(user);

  res.status(StatusCodes.OK).json({
    success: true,
    message:
      "Community profile updated and synchronized across related users/posts",
    data: {
      id: user._id,
      name: user.name,
      avatarUrl: user.avatarUrl || null,
      headline: user.headline || null,
      profile: user.profile,
      community: user.community,
    },
  });
});

const addCommunityConnection = asyncHandler(async (req, res) => {
  const user = await User.findById(req.authUser._id);
  const targetUser = await User.findById(req.body.userId);

  if (!targetUser) {
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "Target user not found",
    });
  }

  const alreadyExists = user.community.connections.some(
    (item) => item.userId.toString() === targetUser._id.toString(),
  );

  if (!alreadyExists) {
    user.community.connections.push({
      userId: targetUser._id,
      relation: req.body.relation || "following",
      communitySnapshot: buildCommunitySnapshot(targetUser),
      updatedAt: new Date(),
    });
    await user.save();
  }

  res.status(StatusCodes.OK).json({
    success: true,
    message: alreadyExists ? "Connection already exists" : "Connection added",
  });
});

const createCommunityPost = asyncHandler(async (req, res) => {
  const user = await User.findById(req.authUser._id);

  const post = await CommunityPost.create({
    author: {
      userId: user._id,
      name: user.name,
      avatarUrl: user.avatarUrl || null,
      headline: user.headline || null,
    },
    content: req.body.content,
    tags: req.body.tags || [],
  });

  user.community.stats.postsCount += 1;
  await user.save();

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Community post created",
    data: post,
  });
});

module.exports = {
  getMe,
  updateCommunityProfile,
  addCommunityConnection,
  createCommunityPost,
};
