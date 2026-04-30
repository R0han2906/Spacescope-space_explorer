const { StatusCodes } = require("http-status-codes");
const { User } = require("../models/User");
const { ApiError } = require("../utils/apiError");
const { verifyAccessToken } = require("../utils/tokens");

const authenticate = async (req, _res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(
      new ApiError(
        StatusCodes.UNAUTHORIZED,
        "Missing or invalid Authorization header",
      ),
    );
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(token);
    const user = await User.findById(decoded.sub);
    if (!user) {
      return next(new ApiError(StatusCodes.UNAUTHORIZED, "User no longer exists"));
    }

    req.authUser = user;
    return next();
  } catch (_error) {
    return next(new ApiError(StatusCodes.UNAUTHORIZED, "Invalid or expired access token"));
  }
};

module.exports = { authenticate };
