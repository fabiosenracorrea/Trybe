const axios = require('axios');

class Joke {
  async getRandomJokeByCategory(category) {
    const jokeURL = `https://api.chucknorris.io/jokes/random?category=${category}`;

    const { data: { value: joke } } = await axios.get(jokeURL);

    return joke;
  }

  async getRandomJoke() {
    const jokeURL = "https://api.chucknorris.io/jokes/random";

    const { data: { value: joke } } = await axios.get(jokeURL);

    return joke;
  }
}

module.exports = Joke;
