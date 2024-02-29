const { Contact } = require("../../models");
const { ctrlWrapper, HttpError } = require("../../helpers");


const getOneContact = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (!contact) {
    throw HttpError(404);
  }

  res.status(200).json(contact);
};

module.exports = {
    getOneContact:ctrlWrapper(getOneContact)
}