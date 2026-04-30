const mongoose = require("mongoose");

const communityPostSchema = new mongoose.Schema(
  {
    author: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      name: { type: String, required: true },
      avatarUrl: { type: String, default: null },
      headline: { type: String, default: null },
    },
    content: { type: String, required: true, trim: true, maxlength: 3000 },
    tags: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

communityPostSchema.index({ "author.userId": 1, createdAt: -1 });

const CommunityPost = mongoose.model("CommunityPost", communityPostSchema);

module.exports = { CommunityPost };
