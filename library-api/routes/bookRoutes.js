const express = require('express');
const {
  addBook, updateBook, deleteBook, getBooks
} = require('../controllers/bookcontroller');

const auth = require('../middleware/authMIddleware.js');

const router = express.Router();
router.use(auth);

router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/', getBooks);

module.exports = router;
