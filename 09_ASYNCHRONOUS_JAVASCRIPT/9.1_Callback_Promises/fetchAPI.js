const API_URL = 'https://icanhazdadjoke.com/';

const fetch = require('node-fetch');

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};


function fetchJoke() {
  return new Promise((resolve, reject) => {
    fetch(API_URL, myObject)
    .then(r => r.json())
    .then(r => resolve(r))
    .catch(err => reject(err))
  })
};

fetchJoke()
  .then(res => console.log(res.joke))
  .catch(err => console.log(err))