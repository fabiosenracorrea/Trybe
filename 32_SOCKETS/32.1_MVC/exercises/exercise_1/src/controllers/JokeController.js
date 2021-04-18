class JokeController {
  constructor(jokeModel) {
    this.model = jokeModel;
    this.getJoke = this.getJoke.bind(this);
  }

  async getJoke(_request, response) {
    const joke = await this.model.fetchJoke();

    return response.status(200).render('joke', { joke });
  }
}

module.exports = JokeController;
