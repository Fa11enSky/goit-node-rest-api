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
};
