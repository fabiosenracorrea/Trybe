import React from 'react';

import useCar from '../hooks/cars';

import carBlue from '../images/carBlue.jpeg';
import carRed from '../images/carRed.jpeg';
import carYellow from '../images/carYellow.jpeg';

function Cars() {
  const { moveCar, cars } = useCar();
  const { red, blue, yellow } = cars;

  return (
    <div>
      <div>
        <img className={red ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => moveCar('red', !red)} type="button">move</button>
      </div>
      <div>
        <img className={blue ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => moveCar('blue', !blue)} type="button">move</button>
      </div>
      <div>
        <img className={yellow ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => moveCar('yellow', !yellow)} type="button">move</button>
      </div>
    </div>
  );
}

export default Cars;
