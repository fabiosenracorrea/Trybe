const BooksRepository = require('../database/repositories/UserRepository');
const ListAllBooksService = require('../services/ListAllBooksService')
const FindBookByIDService = require('../services/FindBookByIDService');
const CreateBookService = require('../services/CreateBookService');
const UpdateBookService = require('../services/UpdateBookService');
const DeleteBookByIDService = require('../services/DeleteBookByIDService');
const AppError = require('../errors/AppError');

class BookController {
  async show(request, response) {
    const booksRepository = new BooksRepository();
    const listAllBooksService = new ListAllBooksService(booksRepository);

    const books = await listAllBooksService.execute();

    return response.status(200).json(books);
  }

  async find(request, response) {
    const { id } = request.params;

    const booksRepository = new BooksRepository();
    const listAllBooksService = new FindBookByIDService(booksRepository);

    const book = await listAllBooksService.execute(id);

    return response.status(200).json(book);
  }

  async delete(request, response) {
    const { id } = request.params;

    const booksRepository = new BooksRepository();
    const deleteBookByIDService = new DeleteBookByIDService(booksRepository);

    await deleteBookByIDService.execute(id);

    return response.status(204).send();
  }

  async create(request, response) {
    const { title, pageQuantity, author } = request.body;

    if (!title || !pageQuantity || !author) {
      throw new AppError('Missing data');
    }

    const booksRepository = new BooksRepository();
    const createBookService = new CreateBookService(booksRepository);

    const newBook = {
      title,
      pageQuantity,
      author,
    }

    const book = await createBookService.execute(newBook);

    return response.status(201).json(book);
  }

  async update(request, response) {
    const { id } = request.params;
    const { title, pageQuantity, author } = request.body;

    if (!title || !pageQuantity || !author) {
      throw new AppError('Missing data');
    }

    const booksRepository = new BooksRepository();
    const updateBookService = new UpdateBookService(booksRepository);

    const bookToUpdate = {
      title,
      pageQuantity,
      author,
      id,
    }

    const book = await updateBookService.execute(bookToUpdate);

    return response.status(201).json(book);
  }
}

module.exports = BookController;
