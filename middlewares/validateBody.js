const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = (req, _, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      /* Ця перевірка була добавлена через вимогу ТЗ:
       "Якщо в body немає обов'язкового поля email, 
      повертає json з ключем {"message":"missing required field email"} і статусом 400 "
      (іншого варіанту як це зробити не придумав 😁)*/
      if (error.message === '"email" is required') {
        error.message = "missing required field email";
      }
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};
module.exports = validateBody;
