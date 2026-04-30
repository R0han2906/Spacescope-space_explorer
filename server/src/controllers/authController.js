const { StatusCodes } = require("http-status-codes");
const ms = require("ms");
const { User } = require("../models/User");
const { ApiError } = require("../utils/apiError");
const { asyncHandler } = require("../utils/asyncHandler");
const { hashPassword, comparePassword } = require("../utils/password");
const {
  buildAuthResponse,
  generateTokenId,
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} = require("../utils/tokens");
const { env } = require("../config/env");

const refreshCookieName = "refreshToken";

const refreshCookieOptions = {
  httpOnly: true,
  secure: env.nodeEnv === "production",
  sameSite: "strict",
  path: "/api/auth",
  maxAge: ms(env.jwtRefreshExpiresIn),
};

const getRefreshTokenFromRequest = (req) =>
  req.body.refreshToken || req.cookies?.[refreshCookieName];

const removeExpiredOrRevokedTokens = (user) => {
  const now = new Date();
  user.refreshTokens = (user.refreshTokens || []).filter(
    (token) => token.expiresAt > now && !token.revokedAt,
  );
};

const register = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;

  const existingByName = await User.findOne({ name });
  if (existingByName) {
    throw new ApiError(StatusCodes.CONFLICT, "Name is already in use");
  }

  if (email) {
    const existingByEmail = await User.findOne({ email });
    if (existingByEmail) {
      throw new ApiError(StatusCodes.CONFLICT, "Email is already in use");
    }
  }

  const passwordHash = await hashPassword(password);
  const user = await User.create({
    name,
    password: passwordHash,
    email: email || undefined,
  });

  const tokenId = generateTokenId();
  const accessToken = signAccessToken(user._id.toString());
  const refreshToken = signRefreshToken(user._id.toString(), tokenId);

  user.refreshTokens.push({
    tokenId,
    userAgent: req.headers["user-agent"] || null,
    ipAddress: req.ip || null,
    expiresAt: new Date(Date.now() + ms(env.jwtRefreshExpiresIn)),
  });
  user.lastLoginAt = new Date();
  await user.save();

  res.cookie(refreshCookieName, refreshToken, refreshCookieOptions);
  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Registered successfully",
    data: buildAuthResponse(user, accessToken),
  });
});

const login = asyncHandler(async (req, res) => {
  const { identifier, password } = req.body;
  const normalized = identifier.trim().toLowerCase();

  const user = await User.findOne({
    $or: [{ email: normalized }, { name: identifier.trim() }],
  }).select("+password");

  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
  }

  removeExpiredOrRevokedTokens(user);

  const tokenId = generateTokenId();
  const accessToken = signAccessToken(user._id.toString());
  const refreshToken = signRefreshToken(user._id.toString(), tokenId);

  user.refreshTokens.push({
    tokenId,
    userAgent: req.headers["user-agent"] || null,
    ipAddress: req.ip || null,
    expiresAt: new Date(Date.now() + ms(env.jwtRefreshExpiresIn)),
  });
  user.lastLoginAt = new Date();
  await user.save();

  res.cookie(refreshCookieName, refreshToken, refreshCookieOptions);
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Logged in successfully",
    data: buildAuthResponse(user, accessToken),
  });
});

const refreshToken = asyncHandler(async (req, res) => {
  const token = getRefreshTokenFromRequest(req);
  if (!token) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Refresh token is required");
  }

  let decoded;
  try {
    decoded = verifyRefreshToken(token);
  } catch (_error) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  const user = await User.findById(decoded.sub);
  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  removeExpiredOrRevokedTokens(user);

  const tokenRecord = user.refreshTokens.find(
    (item) => item.tokenId === decoded.tokenId && !item.revokedAt,
  );
  if (!tokenRecord) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Refresh token is no longer valid");
  }

  tokenRecord.revokedAt = new Date();

  const nextTokenId = generateTokenId();
  const nextAccessToken = signAccessToken(user._id.toString());
  const nextRefreshToken = signRefreshToken(user._id.toString(), nextTokenId);

  user.refreshTokens.push({
    tokenId: nextTokenId,
    userAgent: req.headers["user-agent"] || null,
    ipAddress: req.ip || null,
    expiresAt: new Date(Date.now() + ms(env.jwtRefreshExpiresIn)),
  });

  await user.save();

  res.cookie(refreshCookieName, nextRefreshToken, refreshCookieOptions);
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Token refreshed successfully",
    data: buildAuthResponse(user, nextAccessToken),
  });
});

const logout = asyncHandler(async (req, res) => {
  const token = getRefreshTokenFromRequest(req);
  if (token) {
    try {
      const decoded = verifyRefreshToken(token);
      const user = await User.findById(decoded.sub);
      if (user) {
        user.refreshTokens = (user.refreshTokens || []).map((item) =>
          item.tokenId === decoded.tokenId
            ? { ...item.toObject(), revokedAt: new Date() }
            : item,
        );
        await user.save();
      }
    } catch (_error) {
      // Ignore invalid token on logout to keep endpoint idempotent.
    }
  }

  res.clearCookie(refreshCookieName, { ...refreshCookieOptions, maxAge: undefined });
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Logged out successfully",
  });
});

const logoutAll = asyncHandler(async (req, res) => {
  const token = getRefreshTokenFromRequest(req);
  if (!token) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Refresh token is required");
  }

  const decoded = verifyRefreshToken(token);
  const user = await User.findById(decoded.sub);
  if (!user) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  user.refreshTokens = user.refreshTokens.map((item) => ({
    ...item.toObject(),
    revokedAt: new Date(),
  }));
  await user.save();

  res.clearCookie(refreshCookieName, { ...refreshCookieOptions, maxAge: undefined });
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Logged out from all sessions",
  });
});

module.exports = { register, login, refreshToken, logout, logoutAll };
