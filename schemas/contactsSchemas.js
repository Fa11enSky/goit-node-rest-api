const Joi = require("joi");

const createContactSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    phone: Joi.string()
      .pattern(
        /^[(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{4}$/,
        "number must be in format (000) 123-4567"
      )
      .required(),
  });

const updateContactSchema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    name: Joi.string().min(2).max(20),
    email: Joi.string().email(),
    phone: Joi.string().pattern(
      /^[(]{1}[0-9]{3}[)]{1} [0-9]{3}[-]{1}[0-9]{4}$/,
      "number must be in format (000) 123-4567"
    ),
  });
module.exports = {
  createContactSchema,
  updateContactSchema,
};
