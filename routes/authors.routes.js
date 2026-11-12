const express = require('express');
const authorsController = require('../controllers/authors.controller');

const {
  validateAuthorGet,
  validateAuthorPost,
  validateAuthorPut,
  validateAuthorDelete,
} = require('../validations/author.validation');

const checkValidation = require('../middlewares/check.validation');

const router = express.Router();

router.get('/', validateAuthorGet, checkValidation, authorsController.getAuthor);
router.post('/', validateAuthorPost, checkValidation, authorsController.createAuthor);
router.put('/', validateAuthorPut, checkValidation, authorsController.updateAuthor);
router.delete('/', validateAuthorDelete, checkValidation, authorsController.deleteAuthor);

module.exports = router;