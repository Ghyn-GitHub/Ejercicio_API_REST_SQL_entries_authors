const { body, query, param } = require("express-validator");

const validateEmail = (location, required = true) => {
  const validation = location("email");

  if (required) {
    validation
      .exists({ checkFalsy: true })
      .withMessage("Author email is required");
  }

  return validation
    .isEmail()
    .withMessage("Author email should be valid");
};

module.exports = {
  validateBodyEmail: validateEmail(body),
  validateQueryEmail: validateEmail(query, false),
  validateParamEmail: validateEmail(param),
};