import React, { createContext, useContext, useState } from 'react';

const carContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  function moveCar(car, side) {
    setCars({
      ...cars,
      [car]: side,
    });
  }

  return (
    <carContext.Provider value={{ cars, moveCar }} >
      {children}
    </carContext.Provider>
  );
}

function useCar() {
  const context = useContext(carContext);

  if (!context) {
    throw new Error('useCar should only be used within its Provider');
  }

  return context;
}

export default useCar;
