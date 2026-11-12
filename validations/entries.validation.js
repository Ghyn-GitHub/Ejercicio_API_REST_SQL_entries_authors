const { body } = require("express-validator");
const {
  validateBodyEmail,
  validateQueryEmail,
} = require("./common.validation");

// Validaciones reutilizables
const validateTitle = body("title")
  .exists({ checkFalsy: true })
  .withMessage("Entry title is required")
  .isString()
  .withMessage("Entry title should be string");

const validateContent = body("content")
  .exists({ checkFalsy: true })
  .withMessage("Entry content is required")
  .isString()
  .withMessage("Entry content should be string");

const validateCategory = body("category")
  .exists({ checkFalsy: true })
  .withMessage("Entry category is required")
  .isString()
  .withMessage("Entry category should be string");

// GET
const validateEntryGet = [
  validateQueryEmail,
];

// POST
const validateEntryPost = [
  validateTitle,
  validateContent,
  validateBodyEmail,
  validateCategory,
];

// PUT
const validateEntryPut = [
  validateTitle,
  validateContent,
  validateBodyEmail,
  validateCategory,

  body("new_title")
    .exists({ checkFalsy: true })
    .withMessage("New title is required")
    .isString()
    .withMessage("New title should be string"),
];

// DELETE
const validateEntryDelete = [
  validateTitle,
];

module.exports = {
  validateEntryGet,
  validateEntryPost,
  validateEntryPut,
  validateEntryDelete,
};