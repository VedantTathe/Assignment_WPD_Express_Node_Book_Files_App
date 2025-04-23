const Book = require('../models/Book');

exports.addBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};


};
