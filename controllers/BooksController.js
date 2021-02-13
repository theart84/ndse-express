const Book = require('../models/Book');
const store = require('../store/store');

class BooksController {
  getBooks(req, res) {
    const data = store;
    res.status(200).json({
      success: true,
      data
    });
  }

  getBook(req, res) {
    const { id } = req.params;
    const book = store.find((item) => item.id === id );
    if (book) {
      res.status(200).json({
        success: true,
        data
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Book not found'
      })
    }
  }

  createBook(req, res) {
    const { title, description, authors, favorite, fileCover, fileName } = req.body;
    const book = new Book(title, description, authors, favorite, fileCover, fileName);
    console.log(book);
    store.push(book);
    res.status(201).json({
      success: true,
      data: book
    })
  }

  updateBook(req, res) {

  }

  deleteBook(req, res) {

  }
}

module.exports = new BooksController();