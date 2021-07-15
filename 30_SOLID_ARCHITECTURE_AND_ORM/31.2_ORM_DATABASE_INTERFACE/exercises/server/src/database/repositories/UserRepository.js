const { Book } = require('../models');

class BookRepository {
  async list() {
    const books = await Book.findAll();

    return books;
  }

  async findByID(id) {
    const book = await Book.findByPk(id);

    return book;
  }

  async create({ title, pageQuantity, author }) {
    const bookToCreate = {
      title,
      pageQuantity,
      author,
    }

    const newBook = await Book.create(bookToCreate);

    return newBook;
  }

  async update({ id, title, author, pageQuantity }) {
    const bookToUpdate = {
      title,
      pageQuantity,
      author,
    }

    await Book.update(bookToUpdate, {
      where: {
        id,
      }
    });
  }

  async delete(id) {
    await Book.destroy({
      where: {
        id,
      }
    });
  }
}

module.exports = BookRepository;
