import React, { createContext, useCallback, useContext, useState } from 'react';

const carContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    yellow: false,
    blue: false,
  });

  const moveCar = useCallback((car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  }, [setCars, cars])

  return (
    <carContext.Provider value={{ cars, moveCar }}>
      { children }
    </carContext.Provider>
  );
}

function useCars() {
  const context = useContext(carContext);

  if (!context) {
    throw new Error('useCars hook should be used within its provider');
  }

  return context;
}

export default useCars;
