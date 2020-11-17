import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import Header from '../../components/Header';

import { useNews } from '../../hooks/news';

import './styles.css';

function NewsFeed() {
  const [newsFilter, setNewsFilter] = useState('everything');
  const inputRef = useRef();
  const [refreshing, setRefreshing] = useState(true);
  const [lastSearch, setLastSearch] = useState('technology');

  const { appNews, fetchNews, error, loading } = useNews();

  useEffect(() => {
    fetchNews(newsFilter, 'technology');
  }, []);

  useEffect(() => {
    let timer;

    if (refreshing) {
      timer = setInterval(() => {
        fetchNews(newsFilter, lastSearch);
        console.log(lastSearch, newsFilter)
      }, 300000);
    }

    return () => clearInterval(timer);
  }, [refreshing, lastSearch, newsFilter, fetchNews]);

  const handleRadioChange = useCallback((event) => {
    const radioValue = event.target.value;

    setNewsFilter(radioValue);
  }, []);

  const handleRefreshSwitch = useCallback(() => {
    setRefreshing(!refreshing);
  }, [refreshing]);

  const handleNewsSearch = useCallback(async (formEvent) => {
    formEvent.preventDefault();

    const userQuery = inputRef.current.value;

    await fetchNews(newsFilter, userQuery);
    setLastSearch(userQuery);

    inputRef.current.value  = '';
  }, [inputRef, fetchNews, newsFilter]);

  return (
    <>
      <Header />
      <div className="news-content">
        <form onSubmit={handleNewsSearch}>
          <h1>Browse the news</h1>

          <input
            type="text"
            placeholder="topic"
            className="topic-input"
            ref={inputRef}
          />

          <div className="radio-options">
            <div className="radio-container">
              <label htmlFor="everything">Everything</label>
              <input
                id="everything"
                type="radio"
                name="category"
                value="everything"
                checked={newsFilter === 'everything'}
                onChange={handleRadioChange}
              />
            </div>

            <div className="radio-container">
              <label htmlFor="top">Top Headlines</label>
              <input
                id="top"
                type="radio"
                name="category"
                value="top-headlines"
                checked={newsFilter === 'top-headlines'}
                onChange={handleRadioChange}
              />
            </div>
          </div>

          <div className="button-container">
            <button type="submit" disabled={loading}>
              Browse

            </button>
            <button
              type="button"
              disabled={loading}
              onClick={handleRefreshSwitch}
            >
              {refreshing
                ? 'Automatic Refresh ON'
                : 'Automatic Refresh OFF'
              }
            </button>

            {loading && <div className="loader" />}
          </div>
        </form>

        {error && (
          <div className="error-container">
            <span>Failed to load. Try again.</span>
          </div>
        )}

        {appNews[0] && (
          <div className="news-shown">
            {appNews.map(news => (
              <a
                className="single-news-container"
                key={news.url}
                href={news.url}
              >
                <img src={news.urlToImage} alt={news.title}/>

                <div className="news-info">
                  <strong>{news.title}</strong>
                  <p>{news.description}</p>
                </div>

                <FiChevronRight size={20} />
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default NewsFeed;
