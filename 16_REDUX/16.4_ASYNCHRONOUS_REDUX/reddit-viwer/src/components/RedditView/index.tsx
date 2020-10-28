import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { AppState, SubInfo, fetchSubData } from '../../redux';

import './styles.css';

interface RedditViewProps {
  subsInfo?: SubInfo;
  error?: string;
  loading?: boolean;
  loadSub?(): Promise<void>;
}

interface DispatchProps {
  loadSub(): Promise<void>;
}

const RedditView: React.FC<RedditViewProps> = ({ loading, subsInfo }) => {
  return (
    <div className="App">
      <h1>Subreddit:</h1>
      <div className="selector-container">
        <select name="subreddit">
          <option value="frontend">r/frontend</option>
          <option value="reactjs">r/reactjs</option>
        </select>
      </div>
      <div className="posts-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="posts-heading">
              <span>Updated at: {subsInfo?.updatedAt}</span>
              <button type="button">Refresh</button>
            </div>
            <div className="posts">
              {subsInfo?.posts.map(post => (
                <a href={post.url} key={post.url}>
                  <span>{post.ups}</span>
                  <strong>{post}</strong>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state: AppState): AppState {
  return {
    subsInfo: state.subsInfo,
    error: state.error,
    loading: state.loading,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    loadSub: (sub: string) => dispatch(fetchSubData(sub)),
  };
}

export default connect(mapStateToProps, null)(RedditView);
