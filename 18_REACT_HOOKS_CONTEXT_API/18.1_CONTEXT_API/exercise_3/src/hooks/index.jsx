import React from 'react';

import { RedditProvider } from './reddit';

function AppProvider({ children }) {
  return (
    <RedditProvider>
      { children }
    </RedditProvider>
  )
}

export default AppProvider;
