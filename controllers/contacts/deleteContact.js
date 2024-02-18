const { Contact } = require("../../models");
const { ctrlWrapper, HttpError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete(id);

  if (!contact) {
    throw HttpError(404);
  }

  res.status(200).json(contact);
};

module.exports = {
    deleteContact:ctrlWrapper(deleteContact)
}