const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { env } = require("../config/env");

const generateTokenId = () => crypto.randomUUID();

const signAccessToken = (userId) =>
  jwt.sign({ sub: userId, type: "access" }, env.jwtAccessSecret, {
    expiresIn: env.jwtAccessExpiresIn,
  });

const signRefreshToken = (userId, tokenId) =>
  jwt.sign({ sub: userId, tokenId, type: "refresh" }, env.jwtRefreshSecret, {
    expiresIn: env.jwtRefreshExpiresIn,
  });

const verifyAccessToken = (token) => jwt.verify(token, env.jwtAccessSecret);
const verifyRefreshToken = (token) => jwt.verify(token, env.jwtRefreshSecret);

const buildAuthResponse = (user, accessToken) => ({
  user: {
    id: user._id,
    name: user.name,
    email: user.email || null,
    avatarUrl: user.avatarUrl || null,
    headline: user.headline || null,
    interests: user.community?.interests || [],
  },
  accessToken,
});

module.exports = {
  generateTokenId,
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  buildAuthResponse,
};
