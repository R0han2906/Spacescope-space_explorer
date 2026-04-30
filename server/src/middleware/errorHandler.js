const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");
const { ApiError } = require("../utils/apiError");

const notFoundHandler = (req, _res, next) => {
  next(new ApiError(StatusCodes.NOT_FOUND, `Route not found: ${req.originalUrl}`));
};

const errorHandler = (error, _req, res, _next) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "Internal server error";
  let details = null;

  if (error instanceof ApiError) {
    statusCode = error.statusCode;
    message = error.message;
    details = error.details;
  } else if (error instanceof mongoose.Error.ValidationError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = "Database validation failed";
    details = Object.values(error.errors).map((item) => item.message);
  } else if (error.code === 11000) {
    statusCode = StatusCodes.CONFLICT;
    message = "Duplicate resource";
    details = error.keyValue;
  } else if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = "Invalid or expired token";
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(details ? { details } : {}),
    ...(process.env.NODE_ENV !== "production" ? { stack: error.stack } : {}),
  });
};

module.exports = { errorHandler, notFoundHandler };
