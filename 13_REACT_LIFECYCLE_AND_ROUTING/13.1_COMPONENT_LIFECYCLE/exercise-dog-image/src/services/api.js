import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/image/',
});

export default api;