const AppError = require('../errors/AppError');

class CreateBookService {
  constructor(BooksRepository) {
    this.repository = BooksRepository;
  }

  async execute({ title, pageQuantity, author }) {
    if (
      typeof title !== 'string'
      || typeof pageQuantity !== 'number'
      || typeof author !== 'string'
    ){
      throw new AppError('Invalid book data provided');
    }

    const bookToCreate = {
      title,
      author,
      pageQuantity: Math.round(pageQuantity),
    }

    const book = await this.repository.create(bookToCreate);

    return book;
  }
}

module.exports = CreateBookService;
