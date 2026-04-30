const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");
const { ApiError } = require("../utils/apiError");

const validateRequest = (req, _res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const details = errors.array().map((item) => ({
    field: item.path,
    message: item.msg,
  }));

  return next(new ApiError(StatusCodes.BAD_REQUEST, "Validation failed", details));
};

module.exports = { validateRequest };
