class JokeController {
  constructor(jokeModel) {
    this.model = jokeModel;

    this.getCategoryJoke = this.getCategoryJoke.bind(this);
    this.getRandomJoke = this.getRandomJoke.bind(this);
  }

  async getCategoryJoke(request, response) {
    const { category } = request.params;
    const joke = await this.model.getRandomJokeByCategory(category);

    return response.status(200).render('jokes/index', { joke, category });
  }

  async getRandomJoke(_request, response) {
    const joke = await this.model.getRandomJoke();

    return response.status(200).render('jokes/index', { joke, category: null });
  }
}

module.exports = JokeController;
