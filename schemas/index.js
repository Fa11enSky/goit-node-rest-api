const {
  createContactSchema,
  updateContactSchema,
} = require("./contactsSchemas");

const updateFavoriteSchema = require('./updateFavoriteSchema')
const registerSchema = require('./registerSchema')
const loginSchema = require('./loginSchema')

module.exports = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema
};
