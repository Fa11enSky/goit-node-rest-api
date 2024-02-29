const Joi = require("joi");

const createContactSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });

const updateContactSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().min(2).max(20),
    email: Joi.string().email(),
    phone: Joi.string(),
    favorite: Joi.boolean(),
  });

module.exports = {
  createContactSchema,
  updateContactSchema,
};
