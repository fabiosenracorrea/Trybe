import React, { createContext, useCallback, useContext, useState } from 'react';

const signalContext = createContext();

export function SignalProvider({ children }) {
  const [signal, setSignal] = useState('red');

  const changeSignal = useCallback((signalColor) => {
    setSignal(signalColor);
  }, [setSignal]);

  return (
    <signalContext.Provider value={{ signal, changeSignal }}>
      { children }
    </signalContext.Provider>
  );
}

function useSignal() {
  const context = useContext(signalContext);

  if (!context) {
    throw new Error('useSignal hook should be used within its provider');
  }

  return context;
}

export default useSignal;
