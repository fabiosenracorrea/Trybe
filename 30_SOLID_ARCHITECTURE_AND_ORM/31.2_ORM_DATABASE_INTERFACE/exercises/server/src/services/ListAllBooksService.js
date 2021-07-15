class ListAllBooksService {
  constructor(BooksRepository) {
    this.repository = BooksRepository;
  }

  async execute() {
    const books = await this.repository.list();

    return books;
  }
}

module.exports = ListAllBooksService;
