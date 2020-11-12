import React, { useContext, useCallback, createContext, useState } from 'react';

import api from '../services/redditAPI';

const redditContext = createContext();

const initialRedditInfo = {
  reactjs: {
    posts: [],
  },
  frontend: {
    posts: [],
  },
}

export function RedditProvider({ children }) {
  const [redditPosts, setRedditPosts] = useState(initialRedditInfo);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadSub = useCallback(async (reddit) => {
    try {
      setLoading(true);

      const {
        data: {
          data: { children },
        },
      } = await api.get(`/${reddit}.json`);

      const posts = children.map(({ data }) => {
        return data;
      });

      setLoading(false);
      setHasError(false);

      const currentTime = new Date();
      const updatedAt = `
        ${currentTime.toLocaleDateString()}
         ${currentTime.toLocaleTimeString()}
      `;

      setRedditPosts({
        ...redditPosts,
        [reddit]: {
          posts,
          updatedAt,
        },
    });
    } catch {
      setHasError(true);
      setLoading(false);
    }
  }, [redditPosts]);

  return (
    <redditContext.Provider value={{ redditPosts, loadSub, hasError, loading }}>
      { children }
    </redditContext.Provider>
  )
}

function useReddit() {
  const context = useContext(redditContext);

  if (!context){
    throw new Error('useReddit must be used within its provider');
  }

  return context;
}

export default useReddit;
