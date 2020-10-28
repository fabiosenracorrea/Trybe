import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSubData } from '../../redux';

import './styles.css';


const RedditView = ({ loading, subsInfo, loadSub }) => {
  const [currentSub, setCurrentSub] = useState('reactjs');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!subsInfo[currentSub].updatedAt) {
      loadSub(currentSub);
    }
  }, [currentSub])

  useEffect(() => {
    if (refreshing) {
      loadSub(currentSub);

      setRefreshing(false);
    }
  }, [refreshing]);

  function handleSelect(e) {
    setCurrentSub(e.target.value)
  }

  function handleRefresh() {
    setRefreshing(true);
  }

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
        {(loading && !subsInfo.reactjs.updatedAt) ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="posts-heading">
              <span>Updated at: {subsInfo[currentSub].updatedAt}</span>
              <div className="refresh-container">
                {refreshing && <div className="loader"/>}
                <button onClick={handleRefresh}  type="button">Refresh</button>
              </div>
            </div>
            <div className="posts">
              {subsInfo[currentSub].posts.map(post => (
                <a href={post.url} key={post.url}>
                  <div className="upvotes-container">
                    <span>{post.ups}</span>
                  </div>
                  <p>{post.title}</p>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    subsInfo: state.subsInfo,
    error: state.error,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSub: (sub) => dispatch(fetchSubData(sub)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RedditView);
