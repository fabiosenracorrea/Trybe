import axios from 'axios';

const api = axios.create({
  baseURL: 'http://cep.la',
  headers: {
    accept: 'application/json'
  }
});

export default api;
