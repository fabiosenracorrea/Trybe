import React from 'react';
import { CarProvider } from './cars';
import { SignalProvider } from './signal';

function AppProvider({ children }) {
  return (
    <CarProvider>
      <SignalProvider>
        { children }
      </SignalProvider>
    </CarProvider>
  )
}

export default AppProvider;
