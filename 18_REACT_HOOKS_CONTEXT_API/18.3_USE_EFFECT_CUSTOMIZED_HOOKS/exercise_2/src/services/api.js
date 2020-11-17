import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const queryAuth = `apiKey=${API_KEY}`;

const urlToQuery = `https://newsapi.org/v2/`;

const api = axios.create({
  baseURL: urlToQuery,
});

export default async function getNews(filter, query) {
  const { data: { articles } } = await api.get(`/${filter}?${queryAuth}&q=${query}`)

  return articles;
}
