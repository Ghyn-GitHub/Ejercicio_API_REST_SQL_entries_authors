const express = require('express');
const entriesController = require('../controllers/entries.controller');

const {
  validateEntryGet,
  validateEntryPost,
  validateEntryPut,
  validateEntryDelete,
} = require('../validations/entries.validation');

const checkValidation = require('../middlewares/check.validation');

const router = express.Router();

router.get('/', validateEntryGet, checkValidation, entriesController.getEntries);
router.post('/', validateEntryPost, checkValidation, entriesController.createEntry);
router.put('/', validateEntryPut, checkValidation, entriesController.updateEntry);
router.delete('/', validateEntryDelete,checkValidation, entriesController.deleteEntry);

module.exports = router;