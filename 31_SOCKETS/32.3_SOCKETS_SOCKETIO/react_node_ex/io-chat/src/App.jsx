import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
