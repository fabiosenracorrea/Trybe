import { createContext, useCallback, useContext, useState } from 'react';

import getNews from '../services/api';

const newsContext = createContext();

function NewsProvider({ children }) {
  const [appNews, setAppNews] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchNews = useCallback(async (filter, query) => {
    try {
      setLoading(true);

      const articles = await getNews(filter, query);

      setAppNews(articles);

      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [getNews])

  return (
    <newsContext.Provider value={{ appNews, fetchNews, error, loading }}>
      { children }
    </newsContext.Provider>
  );
}

function useNews() {
  const context = useContext(newsContext);

  if (!context) {
    throw new Error('You must use the news context within its provider');
  }

  return context;
}

export { NewsProvider, useNews };
