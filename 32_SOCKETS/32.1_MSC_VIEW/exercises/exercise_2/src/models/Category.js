const axios = require('axios');

class Category {
  constructor() {
    this.endpoint = "https://api.chucknorris.io/jokes/categories";
  }

  async fetchCategories() {
    const { data: categories } = await axios.get(this.endpoint);

    return categories;
  }
}

module.exports = Category;
