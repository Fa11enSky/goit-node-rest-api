const {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContactById,
} = require("../services");

const { ctrlWrapper, HttpError } = require("../helpers");

// ===============================================================

const getAllContacts = async (req, res) => {
  const data = await listContacts();
  if (!data) {
    throw HttpError(500);
  }
  res.status(200).json(data);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;

  const contact = await getContactById(id);
  if (!contact) {
    throw HttpError(404);
  }
  res.status(200).json(contact);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const contact = await removeContact(id);
  if (!contact) {
    throw HttpError(404);
  }
  res.status(200).json(contact);
};

const createContact = async (req, res) => {
  const newContact = await addContact(req.body);
  res.status(201).json(newContact);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};
module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
};
