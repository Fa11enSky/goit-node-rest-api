const {
  createContact,
  deleteContact,
  getAllContacts,
  getOneContact,
  updateContact,
  updateStatusContact,
} = require("./contactsControllers");

const { register, login } = require("./auth/auth");
const { getCurrent } = require("./auth/current");
const { logout } = require("./auth/logout");
const {updateAvatar} = require('./updateAvatar/updateAvatar')

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
  updateAvatar
};
