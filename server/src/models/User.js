const mongoose = require("mongoose");

const refreshTokenSchema = new mongoose.Schema(
  {
    tokenId: { type: String, required: true },
    userAgent: { type: String, default: null },
    ipAddress: { type: String, default: null },
    expiresAt: { type: Date, required: true },
    revokedAt: { type: Date, default: null },
  },
  { _id: false },
);

const connectionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    relation: {
      type: String,
      enum: ["following", "member", "moderator"],
      default: "following",
    },
    communitySnapshot: {
      name: { type: String, required: true },
      avatarUrl: { type: String, default: null },
      headline: { type: String, default: null },
      expertiseLevel: { type: String, default: "beginner" },
    },
    updatedAt: { type: Date, default: Date.now },
  },
  { _id: false },
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    password: { type: String, required: true, select: false },
    email: { type: String, trim: true, lowercase: true, unique: true, sparse: true },
    avatarUrl: { type: String, trim: true, default: null },
    headline: { type: String, trim: true, maxlength: 120, default: null },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    profile: {
      bio: { type: String, trim: true, maxlength: 500, default: "" },
      location: { type: String, trim: true, maxlength: 120, default: "" },
      website: { type: String, trim: true, default: "" },
      joinedAt: { type: Date, default: Date.now },
    },
    community: {
      interests: { type: [String], default: [] },
      expertiseLevel: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"],
        default: "beginner",
      },
      badges: { type: [String], default: [] },
      socialLinks: {
        twitter: { type: String, trim: true, default: "" },
        github: { type: String, trim: true, default: "" },
        linkedin: { type: String, trim: true, default: "" },
      },
      preferences: {
        isPublic: { type: Boolean, default: true },
        allowMentions: { type: Boolean, default: true },
      },
      stats: {
        postsCount: { type: Number, default: 0 },
        likesReceived: { type: Number, default: 0 },
        contributions: { type: Number, default: 0 },
      },
      connections: { type: [connectionSchema], default: [] },
    },
    refreshTokens: { type: [refreshTokenSchema], default: [] },
    lastLoginAt: { type: Date, default: null },
  },
  { timestamps: true },
);

userSchema.index({ name: 1 });

const User = mongoose.model("User", userSchema);

module.exports = { User };
