const { Contact } = require("../../models");
const { ctrlWrapper, HttpError } = require("../../helpers");

const createContact = async (req, res) => {
  const { _id: owner } = req.user;

  const newContact = await Contact.create({ ...req.body, owner });

  res.status(201).json(newContact);
};

module.exports = {
    createContact:ctrlWrapper(createContact)
}