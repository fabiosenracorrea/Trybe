import React from 'react';

import useSignal from '../hooks/signal';

import redSignal from '../images/redSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
  switch (signalColor) {
    case 'red':
      return redSignal;
    case 'green':
      return greenSignal;
    case 'yellow':
      return yellowSignal;
    default:
      return null;
  }
};

function TrafficSignal() {
  const { signal: signalColor, changeSignal } = useSignal();

  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeSignal('red')} type="button">Red</button>
        <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
        <button onClick={() => changeSignal('green')} type="button">Green</button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="signal" />
    </div>
  );
}

export default TrafficSignal;
