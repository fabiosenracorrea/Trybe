const axios = require('axios');

class Joke {
  constructor() {
    this.endpoint = "https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single";
  }

  async fetchJoke() {
    const { data: { joke } } = await axios.get(this.endpoint);

    return joke;
  }
}

module.exports = Joke;
