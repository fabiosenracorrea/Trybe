import React from 'react';

import { CarProvider } from './cars';

function AppProvider({ children }) {
  return (
    <CarProvider>
      {children}
    </CarProvider>
  );
}

export default AppProvider;
