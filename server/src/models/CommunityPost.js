const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
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
    content: { type: String, required: true, trim: true, maxlength: 1000 },
  },
  { _id: true, timestamps: true },
);

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
    imageUrls: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    commentsCount: { type: Number, default: 0 },
    comments: { type: [commentSchema], default: [] },
  },
  { timestamps: true },
);

communityPostSchema.index({ "author.userId": 1, createdAt: -1 });

const CommunityPost = mongoose.model("CommunityPost", communityPostSchema);

module.exports = { CommunityPost };
