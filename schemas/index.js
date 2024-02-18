const {
  createContactSchema,
  updateContactSchema,
} = require("./contactsSchemas");

const updateFavoriteSchema = require("./updateFavoriteSchema");
const registerSchema = require("./registerSchema");
const loginSchema = require("./loginSchema");
const verifyEmailSchema = require("./verifyEmailSchema");

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  verifyEmailSchema
};
