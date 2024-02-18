const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required()
});

module.exports = verifyEmailSchema;