const AppError = require('../errors/AppError');

class UpdateBookByIDService {
  constructor(BooksRepository) {
    this.repository = BooksRepository;
  }

  async execute({ title, pageQuantity, author, id }) {
    const parsedID = parseInt(id);

    if (
      typeof title !== 'string'
      || typeof pageQuantity !== 'number'
      || typeof author !== 'string'
      || !parsedID
    ){
      throw new AppError('Invalid book data provided');
    }

    const bookToCreate = {
      title,
      author,
      pageQuantity: Math.round(pageQuantity),
      id: parsedID,
    }

    await this.repository.update(bookToCreate);

    return bookToCreate;
  }
}

module.exports = UpdateBookByIDService;
