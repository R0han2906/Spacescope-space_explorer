const { User } = require("../models/User");
const { CommunityPost } = require("../models/CommunityPost");

const buildCommunitySnapshot = (user) => ({
  name: user.name,
  avatarUrl: user.avatarUrl || null,
  headline: user.headline || null,
  expertiseLevel: user.community?.expertiseLevel || "beginner",
});

const syncCommunityDataAcrossUsers = async (user) => {
  const snapshot = buildCommunitySnapshot(user);

  await User.updateMany(
    { "community.connections.userId": user._id },
    {
      $set: {
        "community.connections.$[matched].communitySnapshot": snapshot,
        "community.connections.$[matched].updatedAt": new Date(),
      },
    },
    {
      arrayFilters: [{ "matched.userId": user._id }],
    },
  );

  await CommunityPost.updateMany(
    { "author.userId": user._id },
    {
      $set: {
        "author.name": snapshot.name,
        "author.avatarUrl": snapshot.avatarUrl,
        "author.headline": snapshot.headline,
      },
    },
  );
};

module.exports = {
  buildCommunitySnapshot,
  syncCommunityDataAcrossUsers,
};
