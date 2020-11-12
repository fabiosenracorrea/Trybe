import React, { useCallback, useEffect, useState } from 'react';

import useReddit from '../../hooks/reddit';

import './styles.css';

const RedditView = () => {
  const [currentSub, setCurrentSub] = useState('reactjs');
  const [refreshing, setRefreshing] = useState(false);

  const { loading, redditPosts, loadSub } = useReddit();

  useEffect(() => { // upon loading component or changing select value
    if (!redditPosts[currentSub].updatedAt) {
      loadSub(currentSub);
    }
  }, [currentSub, loadSub, redditPosts])

  useEffect(() => { // upon refresh button
    if (refreshing) {
      loadSub(currentSub);

      setRefreshing(false);
    }
  }, [currentSub, loadSub, refreshing]);

  const handleSelect = useCallback((event) => {
    setCurrentSub(event.target.value);
  }, []);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  return (
    <div className="App">
      <h1>Subreddit: {currentSub}</h1>

      <div className="selector-container">
        <select name="subreddit" value={currentSub} onChange={handleSelect}>
          <option value="frontend">r/frontend</option>
          <option value="reactjs">r/reactjs</option>
        </select>
      </div>

      <div className="posts-container">
        {(loading && !redditPosts[currentSub].updatedAt) ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="posts-heading">
              <span>Updated at: { redditPosts[currentSub].updatedAt }</span>
              <div className="refresh-container">
                { (refreshing || loading) && <div className="loader"/> }
                <button onClick={ handleRefresh }  type="button">Refresh</button>
              </div>
            </div>
            <div className="posts">
              { redditPosts[currentSub].posts.map(post => (
                <a href={ post.url } key={ post.url }>
                  <div className="upvotes-container">
                    <span>{ post.ups }</span>
                  </div>
                  <p>{ post.title }</p>
                </a>
              )) }
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RedditView;
