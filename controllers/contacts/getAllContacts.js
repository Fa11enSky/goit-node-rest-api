const { Contact } = require("../../models");
const { ctrlWrapper, HttpError } = require("../../helpers");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10 } = req.query;

  const skip = (page - 1) * limit;

  const data = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name");

  if (!data) {
    throw HttpError(500);
  }

  res.status(200).json(data);
};

module.exports = {
    getAllContacts: ctrlWrapper(getAllContacts)
}