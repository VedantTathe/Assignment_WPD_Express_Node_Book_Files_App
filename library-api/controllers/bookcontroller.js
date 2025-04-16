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

exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
};

exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, genre, author } = req.query;
  const filter = {};
  if (genre) filter.genre = genre;
  if (author) filter.author = author;

  const books = await Book.find(filter)
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json(books);
};
