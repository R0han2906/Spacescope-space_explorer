const bcrypt = require("bcryptjs");
const { env } = require("../config/env");

const hashPassword = async (rawPassword) =>
  bcrypt.hash(rawPassword, env.saltRounds);

const comparePassword = async (rawPassword, hashedPassword) =>
  bcrypt.compare(rawPassword, hashedPassword);

module.exports = { hashPassword, comparePassword };
