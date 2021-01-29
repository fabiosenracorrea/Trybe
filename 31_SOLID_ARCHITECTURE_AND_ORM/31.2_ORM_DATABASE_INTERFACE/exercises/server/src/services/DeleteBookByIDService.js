const AppError = require('../errors/AppError');

class DeleteBookByIDService {
  constructor(BooksRepository) {
    this.repository = BooksRepository;
  }

  async execute(id) {
    const numberID = parseInt(id);

    if (!numberID){
      throw new AppError('Invalid Identifier provided');
    }

    // const book = await this.repository.findByID(id);

    // if (!book){
    //   throw new AppError('Book not found', 404);
    // }

    await this.repository.delete(numberID);
  }
}

module.exports = DeleteBookByIDService;
