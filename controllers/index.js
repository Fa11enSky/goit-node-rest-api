const {
  createContact,
  deleteContact,
  getAllContacts,
  getOneContact,
  updateContact,
  updateStatusContact,
} = require("./contactsControllers");

const { register } = require("./auth/register");
const { login } = require("./auth/login");
const { getCurrent } = require("./auth/current");
const { logout } = require("./auth/logout");
const { updateAvatar } = require("./updateAvatar/updateAvatar");
const { verifyEmail } = require("./auth/verifyEmail");
const {resendVerifyEmail}= require('./auth/resendVerifyEmail')

module.exports = {
  createContact,
  deleteContact,
  getAllContacts,
  getOneContact,
  updateContact,
  updateStatusContact,
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail
};
