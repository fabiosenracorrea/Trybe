class CategoryController {
  constructor(jokeModel) {
    this.model = jokeModel;
    this.getCategories = this.getCategories.bind(this);
  }

  async getCategories(_request, response) {
    const categories = await this.model.fetchCategories();

    return response.status(200).render('categories/index', { categories });
  }
}

module.exports = CategoryController;
