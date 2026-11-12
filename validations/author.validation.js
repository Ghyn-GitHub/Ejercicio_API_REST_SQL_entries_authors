const { body } = require("express-validator");
const {
  validateBodyEmail,
  validateQueryEmail,
} = require("./common.validation");

// Validaciones reutilizables
const validateName = body("name")
  .exists({ checkFalsy: true })
  .withMessage("Author name is required")
  .isString()
  .withMessage("Author name should be string");

const validateSurname = body("surname")
  .exists({ checkFalsy: true })
  .withMessage("Author surname is required")
  .isString()
  .withMessage("Author surname should be string");

// GET
const validateAuthorGet = [
  validateQueryEmail,
];

// POST
const validateAuthorPost = [
  validateName,
  validateSurname,
  validateBodyEmail,
];

// PUT
const validateAuthorPut = [
  validateName,
  validateSurname,
  validateBodyEmail,

  body("new_email")
    .exists({ checkFalsy: true })
    .withMessage("New email is required")
    .isEmail()
    .withMessage("New email should be valid"),
];

// DELETE
const validateAuthorDelete = [
  validateBodyEmail,
];

module.exports = {
  validateAuthorGet,
  validateAuthorPost,
  validateAuthorPut,
  validateAuthorDelete,
};